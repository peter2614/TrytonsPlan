import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


const courselist = (props) => {

    const courseGroupStyle={
        display: 'flex', 
        flexDirection: 'column', 
        height: '35vh', 
        overflowY: 'auto', 
        width: '100%', 
        marginBottom: '0px', 
        marginLeft: '0px', 
        backgroundColor: '#333'}

    let courses = 
        <ListGroup 
        style={courseGroupStyle}>
        <Courses 
        courses={props.courses} 
        courseHandler={props.courseHandler} 
        displayCourseInfoHandler={props.displayCourseInfoHandler}
        text={"-"}/> 
        </ListGroup>
        
        
        //const style = {height: '520px', padding: '0px', marginBottom: '0px', marginTop: '-1px'}
        return (
            <div>
                <p style={{margin: '0px', padding: '1vh', color: 'black', fontSize: '2vh', backgroundColor: '#CCC'}}>Course List</p>
                <div style={{height: '100%', marginTop: '0px'}}>
                    {courses}
                </div>
            </div>
        );
}


export default courselist;