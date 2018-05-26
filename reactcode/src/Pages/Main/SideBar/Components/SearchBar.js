import React from 'react';
import Courses from './Courses.js';
import {ListGroup} from 'react-bootstrap';

const searchbar = (props) => {

    const courseGroupStyle={
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column', 
        height: '45vh', 
        overflowY: 'auto', 
        width: '100%', 
        marginBottom: '0px', 
        marginTop: '-1px',
        backgroundColor: '#333'
    }

        let courses = null;
            courses = 
            <ListGroup 
            style={courseGroupStyle}>
            <Courses 
            courses={props.searchResults} 
            courseHandler={props.courseHandler}
            displayCourseInfoHandler={props.displayCourseInfoHandler}
            text={"+"}/> 
            </ListGroup>
    

        //const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
    return <div>
        <div style={{height: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <input style={{display: 'block', backgroundColor: '#dddddd', fontSize: 'auto', height: '3vh'}} type="text"
                   onChange={(event) => props.searchCourseHandler(event)} placeholder="Search For Courses"/>
        </div>
        {courses}


    </div>;
}

export default searchbar;