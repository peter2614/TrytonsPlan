import React from 'react';
import Course from './Course.js'
import {ListGroupItem} from 'react-bootstrap';

//Used to map the array of javascript objects into Course Components
const courses = (props) => props.courses.map( (course, index) => {
    const courseStyle = {
        position: 'relative',
        backgroundColor: '#222222',
        box: '1vh',
        width: '100%',
        borderRadius: '0px',
        display: 'block'
    }

    return <ListGroupItem 
            key={course.name} 
            style={courseStyle}> 
            <Course 
            name={course.name} 
            description={course.description} 
            courseHandler={(event) => props.courseHandler(event, course.name)} 
            displayCourseInfoHandler={(event) => props.displayCourseInfoHandler(event, course.name)}
            text={props.text}
            sections={course.sections}/> 
            </ListGroupItem>
});

export default courses;


