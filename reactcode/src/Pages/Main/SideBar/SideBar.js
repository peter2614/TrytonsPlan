import React from 'react';
import SearchBar from './Components/SearchBar.js';
import CourseList from './Components/CourseList.js';
//import logo from '../../../Assets/TrytonsPlanLogo.png';

const sidebar = (props) => {

        //Algorithm by Georg Barikin
        //Sorts the list of courses that appear in the sidebar in natural order
        let searchList = props.searchResults.sort(function (a, b) {
            
            //Look at the name of the course and match each group of letters and numbers. 
            //If characters get matched to the regular expression \D+\, push [infinity, "the first char"]
            //If numbers get matched to the regular expression \d+\, push [the numbers, ""]
            let aMatches = []; 
            let bMatches = [];
            a.name.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { aMatches.push([$1 || Infinity, $2 || ""]) });       
            b.name.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bMatches.push([$1 || Infinity, $2 || ""]) });

            //Go through the array and compare either the number or the character depending on what got matched earlier, if we end up comparing chracters and numbers, number 
            //takes priority because the chararacter group's first element in its array is infinity, similarly, the second element in the number group's array is ""
            let index = 0;
            let aGroup = null;
            let bGroup = null;
            let result = null;
            while(aMatches[index] != null && bMatches[index] != null) {      
                aGroup = aMatches[index];
                bGroup = bMatches[index];
                // compare each group
                result = (aGroup[0] - bGroup[0]) || aGroup[1].localeCompare(bGroup[1]);
                // if the comparison is unequal, then just return the result
                index++;
                if (result != 0) {
                    return result;
                }
            }

            //otherwise, decide by the length
            return aMatches.length - bMatches.length;
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