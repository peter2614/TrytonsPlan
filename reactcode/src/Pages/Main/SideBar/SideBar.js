import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';
import {Button, Tabs, Tab} from 'react-bootstrap';

class sidebar extends Component {
    state = {
        searchResults: [
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
        courseList: [{name: 'CSE19', description: 'Third CSE Course'}
        ],
        completedList: [{name: 'CSE13', description: 'Third CSE Course'}
        ],
        showCourseList: true,

        key: 1
    }

    //Add courses from catalog to Course List
    addCourseHandler = (event, name) => {
        let listToEdit = this.state.courseList;
        if (this.state.showCourseList === false) {
            listToEdit = this.state.completedList;
        }
        const alreadyExists = listToEdit.find(c => {
            return c.name === name;
        });
        const courseIndex = this.state.searchResults.findIndex(c => {
            return c.name === name;
        });
        
        const searchResultsCopy = [...this.state.searchResults];
        
        // if it already exists in the list, just replace it
        if (alreadyExists != null) {

            const courseIndex = listToEdit.findIndex(c => {
                return c.name === name;
            });
            const listCopy = [...listToEdit];
            let course = searchResultsCopy[courseIndex];
            listCopy[courseIndex] = course;
            this.setState({listToEdit: listCopy});
            return;
        }        
        const course = searchResultsCopy[courseIndex];
        let listCopy = [...listToEdit, course];
        console.log(listCopy);
        console.log(listToEdit);
        if (this.state.showCourseList) 
            this.setState({courseList: listCopy});
        if (!this.state.showCourseList)
            this.setState({completedList: listCopy});
    }


    //Remove Courses from Course List
    removeCourseHandler = (event, name) => {
        let listToEdit = this.state.courseList;
        if (this.state.showCourseList === false) {
            listToEdit = this.state.completedList;
        }

        const courseIndex = listToEdit.findIndex(c => {
            return c.name === name;
        });
        // create copies
        const searchResultsCopy = [...this.state.searchResults];
        const listCopy = [...listToEdit];


        listCopy.splice(courseIndex, 1);
        if (this.state.showCourseList) 
            this.setState({courseList: listCopy});
        if (!this.state.showCourseList)
            this.setState({completedList: listCopy});
    }




    switchListHandler = () => {
        this.setState({showCourseList: !this.state.showCourseList})
    }

    showCourseListHandler = () => {
        this.setState({showCourseList: true})
    }
    showCompletedListHandler = () => {
        this.setState({showCourseList: false})
    }

    handleSelect = (key) =>{
        //alert(`selected ${key}`);
        this.setState({ key });
        if (key === 1) {
            this.setState({showCourseList: true})
        } else {
            this.setState({showCourseList: false})
        }
    }

    render() {
        /*
        let listToShow = <CourseList courses={this.state.courseList} courseHandler={this.removeCourseHandler}/>;
        if (this.state.courseList.length == 0) {
            listToShow = <h2 style={{color: 'lightgrey'}}>Add Some Courses!</h2>
        }
        let title = <h4 style={{textAlign: 'center', width: '300px', color: 'lightGrey'}}> Course List </h4>;
        if (!this.state.showCourseList) {
            listToShow = <CourseList courses={this.state.completedList} courseHandler={this.removeCourseHandler}/>;
            if (this.state.completedList.length == 0) {
                listToShow = listToShow = <h2 style={{color: 'lightgrey'}}>Add Some Courses!</h2>
            }
            title = <h4 style={{textAlign: 'center', width: '300px', color: 'lightgrey'}}> Completed Courses </h4>;;
        }*/
  
        return (
            <div className="sidebarcontainer">
                <div className="searchBar">
                <SearchBar courses={this.state.searchResults} courseHandler={this.addCourseHandler} switchListHandler={this.switchListHandler}/>
                </div>
                <hr className="hr1"/>
                <Tabs className="full-width-tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
                    <Tab eventKey={1} title="Course List" onSelect={this.showCourseListHandler}>
                    <div className="courseList">
                    <CourseList courses={this.state.courseList} courseHandler={this.removeCourseHandler}/>
                    </div></Tab>
                    <Tab eventKey={2} title="Completed Courses" onSelect={this.showCompletedListHandler}>
                    <div className="courseList">
                    <CourseList courses={this.state.completedList} courseHandler={this.removeCourseHandler}/>
                    </div>
                    </Tab>
                </Tabs>


                <hr className="hr1"/>
                
                <hr className="hr1"/>
            </div>
            
        )
    }

}

export default sidebar;