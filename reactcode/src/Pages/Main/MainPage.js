import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.js'
import MainSpace from './MainSpace/MainSpace.js'
import Calendar from './MainSpace/Calendar.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'
import {getAllInfo, getGeneralInfo, getCourseNames, getCourseTitles} from './GetData.js';
import {getData, filterByMaxUnits, filterByMinUnits, filterByEndingTime, filterByStartingTime, rankByProfScore, rankByTimeCommitment, rankByTimeUsage, rankByGPA, getSchedule, getScheduleData, turnOffDatabase} from '../../Backend/Utility.js';


class MainPage extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        //optionsbar
        enabled: false,

        courseCatalog: [],
         //sidebar
        courseList: [],
        searchResults: [],
        sidebarLoading: true,

        //Course Information
        displayInfo: true,
        courseInfo: null,
        generalInfo: null,
        courseID: null,
        professorInfo: null,
        allInfo: null,
        displaySplashScreen: true,

        //Schedules
        courseNames: [],
        courseData: [],
        schedules: null,
        filteredSchedules: null,
        maxUnits: 22,
        minUnits: 0,
        endingTime: 2400,
        startingTime: 0,
        lastRank: null,
        scheduleLoading: true,

        //calendar
        displayCalendar: false,
        heightOfMainSpace: '89vh',
        lastSchedule: null,
        currentSchedule: null,
    }

    //==================On Startup==============
    componentDidMount() {
        this.setState({sidebarLoading: true}) ;
        getCourseNames(this.props.db, this.getCoursesCallback);   
    }
   
    getCoursesCallback = (courses) => {
        this.setState({courseCatalog: courses});
        this.setState({searchResults: this.state.courseCatalog});  
        this.setState({sidebarLoading: false}) ;
    }

    
    //========================Sidebar Event Handlers=============================
    addCourseHandler = (event, name) => {
        const alreadyExists = this.state.courseList.find(c => {
            return c.name === name;
        });
        const courseIndex = this.state.courseCatalog.findIndex(c => {
            return c.name === name;
        });
        
        const courseCatalogCopy = [...this.state.courseCatalog];
        
        // if it already exists in the list, just replace it
        if (alreadyExists != null) {
            return;
        }        
        const course = courseCatalogCopy[courseIndex];
        let listCopy = [...this.state.courseList, course];
        this.setState({courseList: listCopy});
    }


    //Remove Courses from Course List
    removeCourseHandler = (event, name) => {
        const courseIndex = this.state.courseList.findIndex(c => {
            return c.name === name;
        });
        // create copies
        const courseCatalogCopy = [...this.state.courseCatalog];
        const listCopy = [...this.state.courseList];

        listCopy.splice(courseIndex, 1);
        this.setState({courseList: listCopy});
    }

    searchCourseHandler = (event) => {
        if (event.target.value === null) {
            {searchResults: this.state.courseCatalog}
        } else {
            let searchString = event.target.value.replace(/[&\[\]\/\\#,+()$~%.'":*?<>{}]/g, '');


            const condition = new RegExp(searchString, 'i');
            const courses = this.state.courseCatalog.filter(course => {
                return condition.test(course.name + course.description);
            });
            this.setState({searchResults: courses});
        }
    }

    clearCourseListHandler = () => {
        this.setState({courseList: []});
    }
    
    //========================Displaying Course Information=============================
    //callback sent to getData to retrieve
    callbackSetAllInfo = (data) => {
        //make sure the sections are in the right order
        data.sort(function(a,b){
            if (a.course.id < b.course.id) return -1;
            if (a.course.id > b.course.id) return 1;
        });
        this.setState({allInfo: data});
        this.setState({loading: false});
    }

    callbackSetGeneralInfo = (data) => {
        this.setState({generalInfo: data});
    }

    displayCourseInfoHandler = (event, courseID) => {
        this.setState({displaySplashScreen: false});
        this.setState({courseID: courseID});
        this.setState({loading: true});
        getGeneralInfo(courseID, this.props.db, this.callbackSetGeneralInfo)
        getAllInfo(courseID,this.props.db, this.callbackSetAllInfo);
        this.setState({displayInfo: true});
    }


    //==========================Schedules===========================
    generateScheduleHandler = () => {
        this.setState({displayInfo: false});
        this.setState({displaySplashScreen: false});
        this.setState({scheduleLoading: true});
        this.state.courseNames = [];
        this.state.courseData = [];
        this.state.courseList.forEach( course => {
                this.state.courseNames.push(course.name);
                getData(course.name, this.getDataCallback);
        });
    }

    getDataCallback = (courseData) => {
        this.state.courseData.push(courseData);
        if(this.state.courseData.length == this.state.courseList.length && this.state.courseNames.length == this.state.courseList.length) {
            getSchedule(this.state.courseNames, this.state.courseData, this.getScheduleCallback);
        }
    }

    getScheduleCallback = (listOfSchedules) => {
        this.state.schedules = listOfSchedules;
        this.state.filteredSchedules = [...listOfSchedules];
        this.filter();
        this.state.loading = false;
        this.setState({scheduleLoading: false});
    }

    //Rank Schedules
    rankScheduleHandler = (label) => {
        if(this.state.schedules != null) {
            this.setState({lastRank : label});
            if(label === "GPA") {this.setState({filteredSchedules: rankByGPA(this.state.filteredSchedules)});}
            if(label === "PROF") {this.setState({filteredSchedules: rankByProfScore(this.state.filteredSchedules)});}
            if(label === "TIMEEFFICIENCY") {this.setState({filteredSchedules: rankByTimeUsage(this.state.filteredSchedules)});}
            if(label === "TIMECOMMITMENT") {this.setState({filteredSchedules: rankByTimeCommitment(this.state.filteredSchedules)});}
        }
    }

    //Handlers for filterings
    maxUnitsHandler = (event) => {
        if (event.target.value != "") {
        this.state.maxUnits = event.target.value;
        } else {
        this.state.maxUnits = 16;
        }
        this.filter();
    }

    minUnitsHandler = (event) => {
        if (event.target.value != "") {
        this.state.minUnits = event.target.value;
        } else {
        this.state.minUnits = 0;
        }
        this.filter();
    }

    startingTimeHandler = (event) => {
        if (event.target.value != '') {  
        this.state.startingTime = parseInt(event.target.value.toString().replace(':',''));
        } else {
        this.state.startingTime = 0;
        }
        this.filter();
    }

    endingTimeHandler = (event) => {
        if (event.target.value != '') {  
        this.state.endingTime = parseInt(event.target.value.toString().replace(':',''));
        } else {
        this.state.endingTime = 2400;
        }
        this.filter();
    }

    filter = () => {
        this.state.filteredSchedules = this.state.schedules;
        
        if(this.state.filteredSchedules != null) {
            let filtered = [...this.state.filteredSchedules]
            filtered = filterByMaxUnits(filtered, this.state.maxUnits);
            filtered = filterByMinUnits(filtered, this.state.minUnits);
            filtered = filterByStartingTime(filtered, this.state.startingTime-1);
            filtered = filterByEndingTime(filtered, this.state.endingTime+1);
            this.state.filteredSchedules = filtered;
            this.setState({filteredSchedules: filtered});
            //remember last rank algorithm
            if(this.state.lastRank != null) {
                this.rankScheduleHandler(this.state.lastRank);
            }
        }

    }

    //Switch Display handler
    switchViewHandler = () => {
        this.setState({displayInfo: !this.state.displayInfo})
        if(this.state.allInfo === null) {
            this.setState({displaySplashScreen: true})
        }
    }

    //Calendar
    displayCalendarHandler = (schedule, scheduleID, fromSchedule) => {
        if(fromSchedule) {
            this.setState({currentSchedule: schedule});
        }
        if(fromSchedule && scheduleID !== this.state.lastSchedule){
            this.setState({displayCalendar: true});
            this.setState({heightOfMainSpace: '44.5vh'});
        } else {
            if(this.state.displayCalendar == true) {
                this.setState({heightOfMainSpace: '89vh'});
            } else {
                this.setState({heightOfMainSpace: '44.5vh'});
            }
            this.setState({displayCalendar: !this.state.displayCalendar});
            
        }
        this.setState({lastSchedule: scheduleID});
        
    }


    render() {
    return (
        <div className="container" style={{padding: '0px', margin: '0px', width: 'inherit', height: '100vh', overflow:'hidden'}}>

            <div className={"NAVBAR"} style={{width:'100vw', height: '5vh', backgroundColor: '#333'}}>
                <div style={{display: 'inline-block', float: 'left'}}>
                <p style={{float: 'left', paddingLeft: '3vw', marginBottom:'0', marginTop: '-.7vh', fontSize: '4vh', color: '#49B', fontWeight: '900'}}>Trytons</p>
                <p style={{float: 'left', paddingLeft: '0', marginBottom:'0', marginTop: '.5vh', fontSize: '3vh', color: '#BB0', fontWeight: '900'}}>Plan</p>
                </div>
            </div>

            <div style={{display: 'inline-block'}}>

                <div  className="sidebarcontainer">
                    <SideBar 
                    courseList={this.state.courseList} 
                    searchResults={this.state.searchResults}  
                    loading={this.state.sidebarLoading} 
                    clearCourseListHandler={this.clearCourseListHandler}

                    addCourseHandler={this.addCourseHandler} 
                    removeCourseHandler={this.removeCourseHandler}   
                    searchCourseHandler={this.searchCourseHandler}
                    displayCourseInfoHandler={this.displayCourseInfoHandler}/>
                </div>

                <div style={{overflow:'hidden', height: '95vh'}}>
                    
                    <div className={"GENERATE OPTIONS"} style={{width:'78vw', height: '6vh', backgroundColor: '#555'}}>
                        <OptionsBar 
                        filteredSchedules={this.state.filteredSchedules} 
                        switchViewHandler={this.switchViewHandler} 
                        sizeOfCourseList={this.state.courseList.length} 
                        generateScheduleHandler={this.generateScheduleHandler} 
                        rankScheduleHandler={this.rankScheduleHandler} 
                        maxUnitsHandler={this.maxUnitsHandler} 
                        minUnitsHandler={this.minUnitsHandler} 
                        startingTimeHandler={this.startingTimeHandler} 
                        endingTimeHandler={this.endingTimeHandler}/>
                    </div>

                    <div className={this.state.displayCalendar?'MainSpaceCalendar':'MainSpace'} style={{width:'78vw', height: this.state.heightOfMainSpace, backgroundColor: '#444', overflowY: 'auto'}}>
                        <MainSpace 
                            displaySplashScreen={this.state.displaySplashScreen} 
                            scheduleLoading={this.state.scheduleLoading} 
                            schedules={this.state.filteredSchedules} 
                            allInfo={this.state.allInfo} 
                            displayInfo={this.state.displayInfo} 
                            courseID={this.state.courseID} 
                            loading={this.state.loading} 
                            generalInfo={this.state.generalInfo} 
                            db={this.props.db}
                            displayCalendarHandler={this.displayCalendarHandler}
                            displayCalendar={this.state.displayCalendar}/>
                        />   
                        
                    </div>
                        <Calendar schedule={this.state.currentSchedule} displayCalendarHandler={this.displayCalendarHandler} displayCalendar={this.state.displayCalendar}/>
                </div>
            </div>
        </div>
        
    );
  }
}

export default MainPage;
