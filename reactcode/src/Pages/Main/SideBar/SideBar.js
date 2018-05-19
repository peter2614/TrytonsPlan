import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';

class sidebar extends Component {
    state = {
        searchResults: [
            {id: 'id1', name: 'CSE1', description: 'First CSE Course', 
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id2', name: 'CSE2', description: 'Second CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' },
                    {sectionCode: 'A01', days: 'MWF', time: '1:00p-1:50p', professor: 'Kane, Daniel Mertz', building: 'CENTR 113' }]},
            {id: 'id3', name: 'CSE3', description: 'Third CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '8:00a-9:20a', professor: 'Freund, Yoav', building: 'WLH 2001' },
                    {sectionCode: 'A01', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id4', name: 'CSE4', description: 'First CSE Course', 
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id5', name: 'CSE5', description: 'Second CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' },
                    {sectionCode: 'A01', days: 'MWF', time: '1:00p-1:50p', professor: 'Kane, Daniel Mertz', building: 'CENTR 113' }]},
            {id: 'id6', name: 'CSE6', description: 'Third CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '8:00a-9:20a', professor: 'Freund, Yoav', building: 'WLH 2001' },
                    {sectionCode: 'A01', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id7', name: 'CSE7', description: 'First CSE Course', 
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id8', name: 'CSE8', description: 'Second CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' },
                    {sectionCode: 'A01', days: 'MWF', time: '1:00p-1:50p', professor: 'Kane, Daniel Mertz', building: 'CENTR 113' }]},
            {id: 'id9', name: 'CSE9', description: 'Third CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '8:00a-9:20a', professor: 'Freund, Yoav', building: 'WLH 2001' },
                    {sectionCode: 'A01', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id10', name: 'CSE10', description: 'First CSE Course', 
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
            {id: 'id11', name: 'CSE11', description: 'Second CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' },
                    {sectionCode: 'A01', days: 'MWF', time: '1:00p-1:50p', professor: 'Kane, Daniel Mertz', building: 'CENTR 113' }]},
            {id: 'id12', name: 'CSE12', description: 'Third CSE Course',
                sections: [
                    {sectionCode: 'A00', days: 'TuTh', time: '8:00a-9:20a', professor: 'Freund, Yoav', building: 'WLH 2001' },
                    {sectionCode: 'A01', days: 'TuTh', time: '2:00p-3:20p', professor: 'Gillespie, Gary N', building: 'CENTR 101' }]},
        /*
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
            {id: 'id9', name: 'CSE13', description: 'Third CSE Course'},*/
        ],
        courseList: [
        ]
    }

    //Add courses from catalog to Course List
    addCourseHandler = (event, name) => {
        const alreadyExists = this.state.courseList.find(c => {
            return c.name === name;
        });
        const courseIndex = this.state.searchResults.findIndex(c => {
            return c.name === name;
        });
        
        const searchResultsCopy = [...this.state.searchResults];
        
        // if it already exists in the list, just replace it
        if (alreadyExists != null) {
            console.log("called2");
            const courseListIndex = this.state.courseList.findIndex(c => {
                return c.name === name;
            });
            const courseList = [...this.state.courseList];
            let course = searchResultsCopy[courseIndex];
            courseList[courseListIndex] = course;
            this.setState({courseList: courseList});
            return;
        }
        console.log("called1");
        const course = searchResultsCopy[courseIndex];
        let courseList = [...this.state.courseList, course];
        this.setState({courseList: courseList});
    }

    addSectionHandler = (event, courseName, sectionCode) => {
        // check if the course is in our courseList
        const alreadyExists = this.state.courseList.find(c => {
            return c.name === courseName;
        });

        const courseIndex = this.state.searchResults.findIndex(c => {
            return c.name === courseName;
        });

        const sectionIndex = this.state.searchResults[courseIndex].sections.findIndex( s=>  {
            return s.sectionCode === sectionCode;
        });

        
        //if not, add the course and course section
        if (alreadyExists == null) {    
            
            let course = {...this.state.searchResults[courseIndex]};
            course.sections = [];
            let searchResultsCopy = [...this.state.searchResults];
            course.sections.push(searchResultsCopy[courseIndex].sections[sectionIndex]);
        
            let courseList = [...this.state.courseList, course]
            this.setState({courseList: courseList});
        } else {
        // add the course section to the course's sections if it does not already exist
            const courseListIndex = this.state.courseList.findIndex(c => {
                return c.name === courseName;
            });

            const courseListSectionIndex = this.state.courseList[courseListIndex].sections.findIndex( s=>  {
                return s.sectionCode === sectionCode;
            });
            if (courseListSectionIndex != -1) {
                return;
            }
            let courseListCopy = [...this.state.courseList];
            let searchResultsCopy = [...this.state.searchResults];
            courseListCopy[courseListIndex].sections.push(searchResultsCopy[courseIndex].sections[sectionIndex]);
            this.setState({courseList: courseListCopy});


        }
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

    //Remove Sections from Course List
    removeSectionHandler = (event, name, sectionCode) => {
        const courseIndex = this.state.courseList.findIndex(c => {
            return c.name === name;
        });

        const sectionIndex = this.state.courseList[courseIndex].sections.findIndex( s=>  {
            return s.sectionCode === sectionCode;
        });
        let courseList = [...this.state.courseList];
        
        //if only 1 section left
        if (courseList[courseIndex].sections.length == 1) {
            this.removeCourseHandler(event, name);
            return;
        }
        courseList[courseIndex].sections.splice(sectionIndex, 1);

        this.setState({courseList: courseList});
    }


    render() {
        return (
            <div className="sidebarcontainer">
                <div className="searchBar">
                <SearchBar courses={this.state.searchResults} courseHandler={this.addCourseHandler} sectionHandler={this.addSectionHandler}/>
                </div>
                <hr className="hr1"/>
                <h4 style={{textAlign: 'center', width: '300px', color: 'lightgrey'}}> Course List </h4>
                <hr className="hr1"/>
                <div className="courseList">
                <CourseList courses={this.state.courseList} courseHandler={this.removeCourseHandler} sectionHandler={this.removeSectionHandler}/>
                </div>
                <hr className="hr1"/>
            </div>
            
        )
    }

}

export default sidebar;