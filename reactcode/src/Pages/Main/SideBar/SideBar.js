import React from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';
import logo from '../../../Assets/TrytonsPlanLogo.png';

const sidebar = (props) => {

        var reA = /[^a-zA-Z]/g;
        var reN = /[^0-9]/g;
        
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