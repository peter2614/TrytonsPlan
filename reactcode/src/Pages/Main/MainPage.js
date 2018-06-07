import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.js'
import MainSpace from './MainSpace/MainSpace.js'
import Calendar from './MainSpace/Calendar.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'
import {getAllInfo, getAllInfoCalendar, getGeneralInfo, getCourseNames, getCourseTitles} from './GetData.js';
import {getData, filterByMaxUnits, filterByMinUnits, filterByEndingTime, filterByStartingTime, rankByProfScore, rankByTimeCommitment, rankByTimeUsage, rankByGPA, getSchedule, getScheduleData, turnOffDatabase} from '../../Backend/Utility.js';
import CourseTree from '../OliverCourseTreeFix/CourseTree.js';

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
        heightOfMainSpace: '94vh',
        lastSchedule: null,
        currentSchedule: null,
        additionalIntervals: [],
        finalIntervals: [],
        showFinals: false,
        calendarHeight: 2,

        //Modal
        showModal: false,

        displayCourseTree: false,
    }

    displayCourseTreeHandler = () => {
        this.setState({displayCourseTree: !this.state.displayCourseTree});
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
        if (this.state.courseList.length == 7) {
            this.setState({showModal: true});
            return;
        }
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
        console.log("DATA", data);
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
        console.log(listOfSchedules);
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
        let validated = event.target.value.replace(/\D/g,'');
        if (validated != "") {
            this.state.maxUnits = validated;
        } else {
            this.state.maxUnits = 16;
        }
        this.filter();
    }

    minUnitsHandler = (event) => {
        let validated = event.target.value.replace(/\D/g,'');
        if (validated != "") {
            this.state.minUnits = validated;
        } else {
            this.state.minUnits = 0;
        }
        this.filter();
    }


    /* Simpler filter
    startingTimeHandler = (event) => {
        let validated = event.target.value;

        if (validated.includes("PM") || validated.includes("P") || validated.includes("p") || validated.includes("pm") ){

            let test = parseInt(validated.replace(/\D/g,''));
            if (test == 1200) {
                validated = "0";
            }
            validated = validated.replace(/\D/g,'');
            validated = parseInt(validated)+1200;
        } else {
            validated = validated.replace(/\D/g,'');
            validated = parseInt(validated);
        }
        if (validated != "") {
            this.state.startingTime = validated;
            } else {
            this.state.startingTime = 0;
            }
            this.filter();
    }*/

    startingTimeHandler = (event) => {
        let validated = event.target.value;

        if (validated.includes("PM") || validated.includes("P") || validated.includes("p") || validated.includes("pm") ){
            let test = parseInt(validated.replace(/\D/g,''));
            if (test == 12 || test == 120 || test == 1200) {
                validated = "0";
            }
            validated = validated.replace(/\D/g,'');
            if (parseInt(validated) <= 24) {validated = validated * 100}
            validated = parseInt(validated)+1200;
        } else {
            if(validated.includes("AM") || validated.includes("A") || validated.includes("a") || validated.includes("am")) {
                let test = parseInt(validated.replace(/\D/g,''));
                if (test == 12 || test == 120 || test == 1200) {
                    validated = "0";
                }
            }
            validated = validated.replace(/\D/g,'');
            if (parseInt(validated) <= 24) {validated = validated * 100}
            validated = parseInt(validated);
        }

        if (validated != "") {
            this.state.startingTime = validated;
        } else {
            this.state.startingTime = 0;
        }
        this.filter();
    }
    /*
    endingTimeHandler = (event) => {
        let validated = event.target.value;
        this.state.startingTime = validated.replace(/(.{1})/g,"$1:").slice(0,-1).toUpperCase();
        if (validated.includes("PM") || validated.includes("P") || validated.includes("p") || validated.includes("pm") ){

            let test = parseInt(validated.replace(/\D/g,''));
            if (test == 1200) {
                validated = "0";
            }
            validated = validated.replace(/\D/g,'');
            validated = parseInt(validated)+1200;
        } else {
            validated = validated.replace(/\D/g,'');
            validated = parseInt(validated);
        }

        if (validated != "") {
        this.state.endingTime = validated;
        } else {
        this.state.endingTime = 2400;
        }
        this.filter();
    }*/

    endingTimeHandler = (event) => {
        let validated = event.target.value;

        if (validated.includes("PM") || validated.includes("P") || validated.includes("p") || validated.includes("pm") ){
            let test = parseInt(validated.replace(/\D/g,''));
            if (test == 12 || test == 120 || test == 1200) {
                validated = "0";
            }
            validated = validated.replace(/\D/g,'');
            if (parseInt(validated) <= 24) {validated = validated * 100}
            validated = parseInt(validated)+1200;
        } else {
            if(validated.includes("AM") || validated.includes("A") || validated.includes("a") || validated.includes("am")) {
                let test = parseInt(validated.replace(/\D/g,''));
                if (test == 12 || test == 120 || test == 1200) {
                    validated = "0";
                }
            }
            validated = validated.replace(/\D/g,'');
            if (parseInt(validated) <= 24) {validated = validated * 100}
            validated = parseInt(validated);
        }

        if (validated != "") {
            this.state.endingTime = validated;
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
            this.setState({showFinals: false});
            this.setState({displayCalendar: true});
            this.setState({heightOfMainSpace: this.getCalendarHeight()});
        } else {
            if(this.state.displayCalendar == true) {
                this.setState({heightOfMainSpace: '94vh'});
            } else {
                this.setState({heightOfMainSpace: this.getCalendarHeight()});
            }
            this.setState({displayCalendar: !this.state.displayCalendar});

        }
        this.setState({lastSchedule: scheduleID});
    }

    //up and down buttons next to calendar button
    raiseCalendarHandler = () => {
        if (this.state.calendarHeight < 3) {

            this.state.calendarHeight++;
        }
        if(this.state.displayCalendar == true) {
            this.setState({heightOfMainSpace: this.getCalendarHeight()});
        }
    }
    lowerCalendarHandler = () => {
        if (this.state.calendarHeight > 1) {
            this.state.calendarHeight--;
        }
        if(this.state.displayCalendar == true) {
            this.setState({heightOfMainSpace: this.getCalendarHeight()});
        }
    }

    //change height of calendar
    getCalendarHeight = () => {
        switch(this.state.calendarHeight) {
            case 0: return '94vh';
                break;
            case 1: return '65vh';
                break;
            case 2: return '45.5vh';
                break;
            case 3: return '28vh';
        }
    }

    //delete an interval when you click on it
    deleteIntervalHandler = (event) => {
        const alreadyExists = this.state.additionalIntervals.find(addInterval => {
            return addInterval.value === event.value;
        });
        if(alreadyExists) {
            const index = this.state.additionalIntervals.findIndex(addInterval => {
                return addInterval.value === event.value;
            });
            // create copies
            let copyOfIntervals = [...this.state.additionalIntervals]


            copyOfIntervals.splice(index, 1);
            this.setState({additionalIntervals: copyOfIntervals});
        }
    }
    //Allow the User to pick LABS, LECTURES, and Finals to add to calendar
    addIntervalHandler = (section, courseID, type) => {
        if(this.state.displayCalendar == false || this.state.showFinals == true) {
            return;
        }
        if(section.section == null) {
            section.section = '';
        }
        let interval = {
            day: section.day,
            startingTime: section.start_time,
            endingTime: section.end_time,
            value: courseID + " - " + type + "   " + section.section,
        }

        const alreadyExists = this.state.additionalIntervals.find(addInterval => {
            return addInterval.value === interval.value;
        });
        if(alreadyExists) {
            const index = this.state.additionalIntervals.findIndex(addInterval => {
                return addInterval.value === interval.value;
            });
            // create copies
            let copyOfIntervals = [...this.state.additionalIntervals]


            copyOfIntervals.splice(index, 1);
            this.setState({additionalIntervals: copyOfIntervals});
            return;
        }
        let copyOfIntervals = [...this.state.additionalIntervals, interval];
        this.setState({additionalIntervals: copyOfIntervals});
    }

    //show the finals for each class in the current schedule in the calendar
    showFinalsHandler = () => {

        if(this.state.currentSchedule != null) {
            getAllInfoCalendar(this.state.currentSchedule ,this.props.db , this.showFinalsHandlerCallback);
        }
    }

    showFinalsHandlerCallback = (data) => {

        if(this.state.showFinals == false) {
            this.state.finalIntervals = [];
            let copyOfIntervals = [...this.state.finalIntervals];
            data.forEach(section => {

                let interval = {
                    day: section.section.FI.day,
                    startingTime: section.section.FI.start_time,
                    endingTime: section.section.FI.end_time,
                    value: section.courseID + " FINAL",
                }

                //If the final has no time info
                if (interval.startingTime != "N/A" && interval.startingTime != null) {
                    copyOfIntervals.push(interval);
                }

            });

            this.setState({finalIntervals: copyOfIntervals});

        }
        this.setState({showFinals: !this.state.showFinals});
    }

    clearCalendarHandler= () => {
        this.setState({additionalIntervals: []});
        this.setState({lastSchedule: null});
        this.setState({currentSchedule: null});
        this.setState({finalIntervals: []});
    }

    //=========Modal===========
    closeModalHandler = () => {
        console.log("CLOSING");
        this.setState({showModal: false});
    }
    /*
       <div className={"NAVBAR"} style={{width:'100vw', height: '5vh', backgroundColor: '#333'}}>
                    <div style={{display: 'inline-block', float: 'left'}}>
                    <p style={{float: 'left', paddingLeft: '3vw', marginBottom:'0', marginTop: '-.7vh', fontSize: '4vh', color: '#49B', fontWeight: '900'}}>Trytons</p>
                    <p style={{float: 'left', paddingLeft: '0', marginBottom:'0', marginTop: '.5vh', fontSize: '3vh', color: '#BB0', fontWeight: '900'}}>Plan</p>
                    </div>
                </div>
                */
    render() {
        let display = <CourseTree Database={this.props.db} displayCourseTreeHandler={this.displayCourseTreeHandler}/>
        if (this.state.displayCourseTree === false) {
            display =
                <div className="container" style={{padding: '0px', margin: '0px', width: 'inherit', height: '100vh', overflow:'hidden'}}>


                    <div className={"NAVBAR"} style={{display: 'inline-block', width: '100%', height: '6%', paddingTop: '2vh', backgroundColor: 'transparent', overflow: 'auto'}}>
                        <div style={{float: 'left', fontFamily: 'Avenir'}}>
                            <p style={{
                                float: 'left',
                                paddingLeft: '6vw',
                                marginBottom: '0',
                                marginTop: '',
                                fontSize: '175%',
                                color: '#5186ae',
                                fontWeight: '900'
                            }}>Trytons</p>
                            <p style={{
                                float: 'left',
                                paddingLeft: '0',
                                marginBottom: '0',
                                marginTop: '',
                                fontSize: '175%',
                                color: '#dacb94',
                                fontWeight: '900'
                            }}>Plan</p>
                        </div>

                        <div className={"GENERATE OPTIONS"} style={{float: 'right', width:'80vw', height: '6vh', marginTop: '0.8vh', backgroundColor: 'transparent'}}>
                            <OptionsBar
                                startingTime = {this.state.startingTime}
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
                    </div>

                    <div style={{display: 'inline-block', margin: '1.5vh'}}>

                        <div  className="sidebarcontainer">
                            <SideBar
                                courseList={this.state.courseList}
                                searchResults={this.state.searchResults}
                                loading={this.state.sidebarLoading}
                                clearCourseListHandler={this.clearCourseListHandler}

                                addCourseHandler={this.addCourseHandler}
                                removeCourseHandler={this.removeCourseHandler}
                                searchCourseHandler={this.searchCourseHandler}
                                displayCourseInfoHandler={this.displayCourseInfoHandler}
                                displayCourseTreeHandler={this.displayCourseTreeHandler}/>

                        </div>

                        <div style={{overflow:'hidden', height: '100vh'}}>
                            <div className={this.state.displayCalendar?'MainSpaceCalendar':'MainSpace'} style={{width:'78vw', height: this.state.heightOfMainSpace, backgroundColor: 'transparent', overflowY: 'auto'}}>
                                <MainSpace
                                    displaySplashScreen={this.state.displaySplashScreen}
                                    scheduleLoading={this.state.scheduleLoading}
                                    schedules={this.state.filteredSchedules}
                                    schedulesErrorCheck={this.state.schedules}
                                    allInfo={this.state.allInfo}
                                    displayInfo={this.state.displayInfo}
                                    courseID={this.state.courseID}
                                    loading={this.state.loading}
                                    generalInfo={this.state.generalInfo}
                                    db={this.props.db}
                                    displayCalendarHandler={this.displayCalendarHandler}
                                    displayCalendar={this.state.displayCalendar}
                                    closeModalHandler={this.closeModalHandler}
                                    showModal={this.state.showModal}
                                    addIntervalHandler={this.addIntervalHandler}/>
                                />

                            </div>

                            <Calendar
                                heightOfMainSpace={this.state.heightOfMainSpace}
                                showFinalsHandler={this.showFinalsHandler}
                                deleteIntervalHandler={this.deleteIntervalHandler}
                                additionalIntervals={this.state.additionalIntervals}
                                clearCalendarHandler={this.clearCalendarHandler}
                                raiseCalendarHandler={this.raiseCalendarHandler}
                                lowerCalendarHandler={this.lowerCalendarHandler}
                                schedule={this.state.currentSchedule}
                                displayCalendarHandler={this.displayCalendarHandler}
                                displayCalendar={this.state.displayCalendar}
                                finalIntervals={this.state.finalIntervals}
                                showFinals={this.state.showFinals}/>

                        </div>
                    </div>
                </div>
        }


        return (
            display

        );
    }
}

export default MainPage;
