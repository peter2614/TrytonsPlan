import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';

class sidebar extends Component {
    state = {
        searchResults: [
            {id: 'id1', name: 'CSE1', description: 'First CSE Course'},
            {id: 'id2', name: 'CSE2', description: 'Second CSE Course'},
            {id: 'id3', name: 'CSE3', description: 'Third CSE Course'},
            {id: 'id4', name: 'CSE4', description: 'First CSE Course'},
            {id: 'id5', name: 'CSE5', description: 'Second CSE Course'},
            {id: 'id6', name: 'CSE6', description: 'Third CSE Course'},
            {id: 'id7', name: 'CSE7', description: 'First CSE Course'},
            {id: 'id8', name: 'CSE8', description: 'Second CSE Course'},
            {id: 'id9', name: 'CSE9', description: 'Third CSE Course'},
            {id: 'id6', name: 'CSE10', description: 'Third CSE Course'},
            {id: 'id7', name: 'CSE11', description: 'First CSE Course'},
            {id: 'id8', name: 'CSE12', description: 'Second CSE Course'},
            {id: 'id9', name: 'CSE13', description: 'Third CSE Course'},
        ],
        courseList: [
        ]
    }

    //Add courses from catalog to Course List
    addCourseHandler = (event, name) => {
        const alreadyExists = this.state.courseList.find(c => {
            return c.name === name;
        });
        if (alreadyExists != null) {
            return;
        }
        const courseIndex = this.state.searchResults.findIndex(c => {
            return c.name === name;
        });
        const course = {...this.state.searchResults[courseIndex]};
        let courseList = [...this.state.courseList, course];
        this.setState({courseList: courseList});
    }

    //Remove Courses from Course List
    removeCourseHandler = (event, name) => {
        const courseIndex = this.state.courseList.findIndex(c => {
            return c.name === name;
        });
        let courseList = [...this.state.courseList];
        courseList.splice(courseIndex, 1);

        this.setState({courseList: courseList});
    }

    render() {
        return (
            <div className="sidebarcontainer">
                <div className="searchBar">
                <SearchBar courses={this.state.searchResults} courseHandler={this.addCourseHandler}/>
                </div>
                <hr className="hr1"/>
                <h4 style={{textAlign: 'center', width: '300px', color: 'lightgrey'}}> Course List </h4>
                <hr className="hr1"/>
                <div className="courseList">
                <CourseList courses={this.state.courseList} courseHandler={this.removeCourseHandler}/>
                </div>
                <hr className="hr1"/>
            </div>
            
        )
    }

}

export default sidebar;