import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.js'
import MainSpace from './MainSpace/MainSpace.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'


class MainPage extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        courseCatalog: [
            /*{name: 'HUM7', description: 'Progrmng Lang:Princpl&Paradigm'},
            {name: 'HUM10', description: 'Third CSE Course'},
            {name: 'Math1', description: 'Third CSE Course'},
            {name: 'Math2', description: 'Third CSE Course'},
            {name: 'CSE3', description: 'Third CSE Course'},
            {name: 'CSE4', description: 'First CSE Course'},
            {name: 'CSE5', description: 'Second CSE Course'},
            {name: 'CSE6', description: 'Third CSE Course'},
            {name: 'CSE7', description: 'First CSE Course'},
            {name: 'CSE8', description: 'Second CSE Course'},
            {name: 'CSE9', description: 'Third CSE Course'},
            {name: 'CSE10', description: 'Third CSE Course'},
            {name: 'CSE11', description: 'First CSE Course'},
            {name: 'CSE12', description: 'Second CSE Course'},
            {name: 'CSE13', description: 'Third CSE Course'},*/
        ],
        courseList: [],
        searchResults: [],
        schedules: [1,2,3,4,5,6,7],
        displayInfo: true,
        courseInfo: null,
        generalInfo: null,
        courseID: null,
    }

    getCourses(courseCatalog) {
        console.log("TEST");
        let f18ref = this.props.db.database().ref("F18");
        let catalogref = this.props.db.database().ref("course");
        const courseCatalogCopy = [...this.state.courseCatalog];
        var newCatalog = null;
        f18ref.on("value", snapshot => {
            //var data = [];
            for (var property in snapshot.val()) {
                //console.log(property);
                var course = {
                    name: property,
                    description: "need oliver"
                }
                let courseCatalog = [...this.state.courseCatalog,course];
                this.setState({courseCatalog: courseCatalog})
                //console.log(this.state.courseCatalog);
            }
           
            
            /*console.log(snapshot.val());
            snapshot.forEach(course => {
                console.log(course.val());
             });*/
             this.setState({searchResults: this.state.courseCatalog});
        })
        
    }

    componentDidMount() {
        this.getCourses(this.state.courseCatalog);      
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
        //console.log(event.target.value);
        if (event.target.value === null) {
            {searchResults: this.state.courseCatalog}
        } else {
        const condition = new RegExp(event.target.value, 'i');
        const courses = this.state.courseCatalog.filter(course => {
            return condition.test(course.name);
        });
        this.setState({searchResults: courses});
        }
    }

    displayCourseInfoHandler = (event, courseID) => {
        //console.log(courseID); 
        this.setState({courseID: courseID});
        let f18ref = this.props.db.database().ref("F18/" + courseID);
        let catalogref = this.props.db.database().ref("course" + courseID);
        f18ref.on("value", snapshot => {
            this.setState({courseInfo: snapshot.val()});
            //console.log(snapshot.val());
            
            //this.state.courseInfo = snapshot.val();
            //console.log(this.state.courseInfo);
        });
        catalogref.on("value", snapshot => {
            this.setState({generalInfo: snapshot.val()});
        });
        this.setState({displayInfo: true});
    }

    generateScheduleHandler = () => {
            console.log("GENERATE SCHEDULES");
            this.setState({displayInfo: false});
    }

    render() {
    return (
        <div className="container" style={{padding: '0px', margin: '0px', width: 'inherit', height: 'inherit'}}>
            <div className={"NAVBAR"} style={{width:'100vw', height: '5vh', backgroundColor: '#333'}}>
                <div style={{display: 'inline-block', float: 'left'}}>
                <p style={{float: 'left', paddingLeft: '3vw', marginBottom:'0', marginTop: '-.7vh', fontSize: '4vh', color: '#49B', fontWeight: '900'}}>Trytons</p>
                <p style={{float: 'left', paddingLeft: '0', marginBottom:'0', marginTop: '.5vh', fontSize: '3vh', color: '#BB0', fontWeight: '900'}}>Plan</p>
                </div>
            </div>
            <div style={{display: 'inline-block'}}>
                <div  className="sidebarcontainer">
                    <SideBar 
                    courseCatalog={this.state.courseCatalog} 
                    courseList={this.state.courseList} 
                    searchResults={this.state.searchResults}   

                    addCourseHandler={this.addCourseHandler} 
                    removeCourseHandler={this.removeCourseHandler}   
                    searchCourseHandler={this.searchCourseHandler}
                    displayCourseInfoHandler={this.displayCourseInfoHandler}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    
                    <div className={"GENERATE OPTIONS"} style={{width:'78vw', height: '6vh', backgroundColor: '#555'}}>
                        <OptionsBar generateScheduleHandler={this.generateScheduleHandler} />
                    </div>
                    <div className={"MAINSPACE CONTAINER"} style={{width:'78vw', height: '89vh', backgroundColor: '#777', overflowY: 'auto'}}>
                        <MainSpace scheduleCards={this.state.schedules} displayInfo={this.state.displayInfo} courseInfo={this.state.courseInfo}  generalInfo={this.state.generalInfo} courseID={this.state.courseID}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}

export default MainPage;
