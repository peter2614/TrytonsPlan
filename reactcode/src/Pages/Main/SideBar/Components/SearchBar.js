import React from 'react';
import Courses from './Courses.js';
import {ListGroup} from 'react-bootstrap';
import './Course.css';

const searchbar = (props) => {

    const courseGroupStyle={
        display: 'block', 
        flexDirection: 'column', 
        height: '45vh', 
        overflowY: 'auto', 
        width: '100%', 
        marginBottom: '0px', 
        marginTop: '-1px',
        backgroundColor: '#333'
    }
    const courseGroupStyleLoading={
        height: '45vh', 
        width: '100%', 
        marginBottom: '0px', 
        marginTop: '-1px',
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection:'column',
    }
        
        
    let courses = <div style={courseGroupStyleLoading}>
                <div class="loader"></div>
                    <p style={{marginTop: '10px', fontSize: '2vw', color:'lightgrey'}}>Loading up Course Offerings...</p>
                </div>
    if(props.loading == false) {
        courses = 
        <div
        style={courseGroupStyle}>
        <Courses 
        courses={props.searchResults} 
        courseHandler={props.courseHandler}
        displayCourseInfoHandler={props.displayCourseInfoHandler}
        text={"+"}/> 
        </div>
    } 

        //const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
        return (
            <div>
                <div style={{height: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <input style={{ backgroundColor: 'lightgrey', fontSize: '2vh', height: '3vh'}} type="text" onChange={(event) => props.searchCourseHandler(event)} placeholder="Search For Courses"/> 
                </div>
                {courses}
                    
                
            </div>
        );
    }

export default searchbar;