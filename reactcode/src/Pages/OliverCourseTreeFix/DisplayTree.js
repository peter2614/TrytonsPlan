import React from 'react';
import CourseNode from './CourseNode.js';

const DisplayTree = (props) => props.courses.map((course) => {
    return(
        <CourseNode
            course={course}
            handleEnter={props.handleEnter}
            handleLeave={props.handleLeave}
            handleClick = {props.handleClick}
        />
    );
});

export default DisplayTree;