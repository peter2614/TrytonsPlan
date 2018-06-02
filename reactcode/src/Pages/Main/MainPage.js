import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.js'
import MainSpace from './MainSpace/MainSpace.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'
import {getAllInfo, getGeneralInfo, getCourseNames, getCourseTitles} from './GetData.js';
import {getData, filterByMaxUnits, filterByMinUnits, filterByEndingTime, filterByStartingTime, rankByProfScore, rankByTimeCommitment, rankByTimeUsage, rankByGPA, getSchedule, getScheduleData, turnOffDatabase} from '../../Backend/Utility.js';


class MainPage extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
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

        //Schedules
        courseNames: [],
        courseData: [],
        schedules: null,
        filteredSchedules: null,
        maxUnits: 16,
        minUnits: 0,
        endingTime: 0,
        startingTime: 0,
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
            const condition = new RegExp(event.target.value, 'i');
            const courses = this.state.courseCatalog.filter(course => {
                return condition.test(course.name + course.description);
            });
            this.setState({searchResults: courses});
        }
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
 
        this.setState({courseID: courseID});
        this.setState({loading: true});
        getGeneralInfo(courseID, this.props.db, this.callbackSetGeneralInfo)
        getAllInfo(courseID,this.props.db, this.callbackSetAllInfo);
        this.setState({displayInfo: true});
    }


    //==========================Schedules===========================
    generateScheduleHandler = () => {
        this.state.loading = true;
        this.state.courseNames = [];
        this.state.courseData = [];
        this.state.courseList.forEach( course => {
                this.state.courseNames.push(course.name);
                getData(course.name, this.getDataCallback);
        });
        //console.log("COURSE DATA")
        //console.log(this.state.courseData);
    
        //getSchedule(courseNames, this.state.courseData, this.getScheduleCallback);
        
        
    }

    getDataCallback = (courseData) => {
        this.state.courseData.push(courseData);
        if(this.state.courseData.length == this.state.courseList.length && this.state.courseNames.length == this.state.courseList.length) {
            //console.log("COURSENAMES");
            //console.log(this.state.courseNames);
            //console.log("COURSEDATA");
            //console.log(this.state.courseData);
            getSchedule(this.state.courseNames, this.state.courseData, this.getScheduleCallback);
        }
    }

    getScheduleCallback = (listOfSchedules) => {

        this.state.schedules = listOfSchedules;
        console.log("LISTOFSCHEDULES");
        console.log(listOfSchedules);
        this.state.filteredSchedules = [...listOfSchedules];
        //this.state.filteredSchedules = filterByMaxUnits(this.state.filteredSchedules, this.state.maxUnits);
        //this.state.filteredSchedules = filterByEndingTime(this.state.filteredSchedules, this.state.endingTime);
        //this.state.filteredSchedules = filterByStartingTime(this.state.filteredSchedules, this.state.startingTime);
        console.log("filteredSchedules");
        console.log(this.state.filteredSchedules);
        this.state.loading = false;
        this.setState({displayInfo: false});
        

    }

    rankScheduleHandler = (label) => {
        //console.log(label);
        console.log(label);
        if(label === "GPA") {this.setState({filteredSchedules: rankByGPA(this.state.filteredSchedules)});}
        if(label === "PROF") {this.setState({filteredSchedules: rankByProfScore(this.state.filteredSchedules)});}
        if(label === "TIMEEFFICIENCY") {this.setState({filteredSchedules: rankByTimeUsage(this.state.filteredSchedules)});}
        if(label === "TIMECOMMITMENT") {this.setState({filteredSchedules: rankByTimeCommitment(this.state.filteredSchedules)});}
    }

    maxUnitsHandler = (event) => {
        console.log("INMAXUNITS");
        if (event.target.value != '') {  
        this.state.maxUnits = event.target.value;
        } else {
        this.state.maxUnits = 16;
        }
        this.filter();
    }

    minUnitsHandler = (event) => {
        if (event.target.value != '') {  
        this.state.minUnits = event.target.value;
        } else {
        this.state.minUnits = 0;
        }
        this.filter();
    }

    startingTimeHandler = (event) => {
        if (event.target.value != '') {  
        this.state.startingTime = event.target.value;
        } else {
        this.state.startingTime = 0;
        }
        this.filter();
    }

    endingTimeHandler = (event) => {
        if (event.target.value != '') {  
        this.state.endingTime = event.target.value;
        } else {
        this.state.endingTime = 0;
        }
        this.filter();
    }

    filter = () => {
        console.log("INFILTER");
        console.log(this.state.endingTime);
        console.log(this.state.startingTime);
        this.state.filteredSchedules = this.state.schedules;
        let filtered = [...this.state.filteredSchedules]
        if(filtered != null) {
            filtered = filterByMaxUnits(filtered, this.state.maxUnits);
            filtered = filterByMinUnits(filtered, this.state.minUnits);
            //filtered = filterByStartingTime(filtered, this.state.startingTime)
            console.log(filtered);
            //filtered = filterByEndingTime(filtered, this.state.endingTime);
            console.log(filtered);
            this.setState({filteredSchedules: filtered});
        }
        console.log(this.state.filteredSchedules);
    }


    render() {

    return (
        <div className="container" style={{padding: '0px', margin: '0px', width: 'inherit', height: 'inherit', overflowX:'hidden'}}>
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

                    addCourseHandler={this.addCourseHandler} 
                    removeCourseHandler={this.removeCourseHandler}   
                    searchCourseHandler={this.searchCourseHandler}
                    displayCourseInfoHandler={this.displayCourseInfoHandler}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    
                    <div className={"GENERATE OPTIONS"} style={{width:'78vw', height: '6vh', backgroundColor: '#555'}}>
                        <OptionsBar generateScheduleHandler={this.generateScheduleHandler} rankScheduleHandler={this.rankScheduleHandler} maxUnitsHandler={this.maxUnitsHandler} minUnitsHandler={this.minUnitsHandler} startingTimeHandler={this.startingTimeHandler} endingTimeHandler={this.endingTimeHandler}/>
                    </div>
                    <div className={"MAINSPACE CONTAINER"} style={{width:'78vw', height: '89vh', backgroundColor: '#345', overflowY: 'scroll'}}>
                        <MainSpace schedules={this.state.filteredSchedules} allInfo={this.state.allInfo} displayInfo={this.state.displayInfo} courseID={this.state.courseID} loading={this.state.loading} generalInfo={this.state.generalInfo} db={this.props.db}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}

export default MainPage;
