import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const searchbar = (props) => {

    const courseGroupStyle={
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
            text={"+"}/> 
            </ListGroup>
    

        const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
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