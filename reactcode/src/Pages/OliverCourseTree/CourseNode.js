import React from 'react';

const CourseNode = (props) => {
    var translate = "translate(" + props.course.cx + ", " + props.course.cy + ")";
    var opacity = props.course.fade ? "0.2" : "1";
    var stroke = props.course.stroke;
    return(
        <g
            id = {props.course.courseID}
            onMouseEnter = {() => props.handleEnter(props.course.index)}
            onMouseLeave = {() => props.handleLeave()}
            onClick = {() => props.handleClick(props.course.index)}
            transform = {translate} 
            style = {{fill:props.course.color}}
            opacity = {opacity}
        >
                <circle
                    r = "34"
                    stroke = {stroke}
                    strokeWidth = "3"
                />
                <text
                    text-anchor = "middle"
                    y="4" 
                    style = {{stroke:"#000"}}
                    fontSize="11"
                >
                    {props.course.courseID}
                </text>
        </g>
    );
}

export default CourseNode;