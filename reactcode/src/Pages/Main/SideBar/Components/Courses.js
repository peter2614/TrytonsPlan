import React from 'react';
import Course from './Course.js'
import {ListGroupItem} from 'react-bootstrap';

const courses = (props) => props.courses.map( (course, index) => {
    const courseStyle = {
        //margin: 'auto',
        backgroundColor: '#222',
        box: '1px',
        width: '100%',
    }

    return <ListGroupItem 
            key={course.name} 
            style={courseStyle}> 
            <Course 
            name={course.name} 
            description={course.description} 
            courseHandler={(event) => props.courseHandler(event, course.name)} 
            text={props.text}/> 
            </ListGroupItem>
});

export default courses;


