import React from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';
//import logo from '../../../Assets/TrytonsPlanLogo.png';

const sidebar = (props) => {

        //Sorts the list of courses that appear in the sidebar in natural order
        let searchList = props.searchResults.sort(function naturalCompare(a, b) {
            var ax = [], bx = [];
            a.name.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
            b.name.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
            
            while(ax.length && bx.length) {
                var an = ax.shift();
                var bn = bx.shift();
                var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
                if(nn) return nn;
            }
            return ax.length - bx.length;
        });

        return (
            <div style={{position: 'relative'}}>
                <SearchBar 
                loading={props.loading}
                searchResults={searchList} 
                searchCourseHandler={props.searchCourseHandler} 
                courseHandler={props.addCourseHandler} 
                displayCourseInfoHandler={props.displayCourseInfoHandler}
                displayCourseTreeHandler={props.displayCourseTreeHandler}/>
                
                <CourseList 
                courses={props.courseList} 
                courseHandler={props.removeCourseHandler} 
                displayCourseInfoHandler={props.displayCourseInfoHandler}
                clearCourseListHandler={props.clearCourseListHandler}/>
                
                <hr className="hr1" style={{marginBottom: '10px'}}/>
            </div>
     
        ) 
}



export default sidebar;