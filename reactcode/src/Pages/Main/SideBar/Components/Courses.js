import React from 'react';
import Course from './Course.js'
import {ListGroupItem} from 'react-bootstrap';

//Used to map the array of javascript objects into Course Components
const courses = (props) => props.courses.map( (course, index) => {
    const courseStyle = {
        //margin: 'auto',
        backgroundColor: '#37506a',
        opacity: '70%',
        box: '1px',
        width: '100%',
        minHeight: '3.75vh',
    };
    return <div
            key={course.name} 
            style={courseStyle}> 
            <Course 
            name={course.name} 
            description={course.description} 
            units={course.units}
            courseHandler={(event) => props.courseHandler(event, course.name)} 
            displayCourseInfoHandler={(event) => props.displayCourseInfoHandler(event, course.name)}
            text={props.text}
            sections={course.sections}/> 
            </div>
});

export default courses;


