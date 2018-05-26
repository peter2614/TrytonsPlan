import React from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';
import logo from '../../../Assets/TrytonsPlanLogo.png';

const sidebar = (props) => {
        return (
            <div style={{position: 'relative'}}>
                <SearchBar 
                searchResults={props.searchResults} 
                searchCourseHandler={props.searchCourseHandler} 
                courseHandler={props.addCourseHandler} 
                displayCourseInfoHandler={props.displayCourseInfoHandler}/>
                <CourseList 
                courses={props.courseList} 
                courseHandler={props.removeCourseHandler} 
                displayCourseInfoHandler={props.displayCourseInfoHandler}/>
                <hr className="hr1" style={{marginBottom: '10px'}}/>
            </div>
     
        ) 
}



export default sidebar;