import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, Navbar } from 'react-bootstrap';
import SideBar from './SideBar/SideBar.js'
import NavBar from './NavBar/Navbar.js'
import MainSpace from './MainSpace/MainSpace.js'
import './MainPage.css';
import OptionsBar from './OptionsBar/OptionsBar.js'

class MainPage extends Component {
    state = {
        courseCatalog: [
            {name: 'HUM7', description: 'Progrmng Lang:Princpl&Paradigm'},
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
            {name: 'CSE13', description: 'Third CSE Course'},
        ],
        courseList: [],
        searchResults: []
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

    componentDidMount() {
        this.setState({searchResults: this.state.courseCatalog});
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
        console.log(event.target.value);
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
                    searchCourseHandler={this.searchCourseHandler}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    
                    <div className={"GENERATE OPTIONS"} style={{width:'82vw', height: '6vh', backgroundColor: '#555'}}>
                        <OptionsBar />
                    </div>
                    <div className={"MAINSPACE CONTAINER"} style={{width:'82vw', height: '89vh', backgroundColor: '#777', overflowY: 'auto'}}>
                        <MainSpace />
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}

export default MainPage;
