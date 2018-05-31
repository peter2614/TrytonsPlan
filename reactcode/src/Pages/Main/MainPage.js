import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.js'
import MainSpace from './MainSpace/MainSpace.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'
import {getAllInfo, getGeneralInfo, getCourseNames, getCourseTitles} from './GetData.js';


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

        schedules: [1,2,3,4,5,6,7],
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



    generateScheduleHandler = () => {
            console.log("GENERATE SCHEDULES");
            this.setState({displayInfo: false});
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
                        <OptionsBar generateScheduleHandler={this.generateScheduleHandler} />
                    </div>
                    <div className={"MAINSPACE CONTAINER"} style={{width:'78vw', height: '89vh', backgroundColor: '#345', overflowY: 'scroll'}}>
                        <MainSpace scheduleCards={this.state.schedules} allInfo={this.state.allInfo} displayInfo={this.state.displayInfo} courseID={this.state.courseID} loading={this.state.loading} generalInfo={this.state.generalInfo} db={this.props.db}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}

export default MainPage;
