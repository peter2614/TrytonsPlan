import React from 'react';
import './CourseList.css';
import Courses from './Courses.js';


const courselist = (props) => {

    const courseGroupStyle= {
        display: 'block',
        flexDirection: 'column',
        height: '32vh',
        overflowY: 'auto',
        width: '100%',
        marginBottom: '0vh',
        marginLeft: '0px',
        backgroundColor: '#3c3c3c',
        opacity: 0.95
    };

    let courses =
        <div
            style={courseGroupStyle}>
            <Courses
                courses={props.courses}
                courseHandler={props.courseHandler}
                displayCourseInfoHandler={props.displayCourseInfoHandler}
                text={"-"}/>
        </div>;


    //const style = {height: '520px', padding: '0px', marginBottom: '0px', marginTop: '-1px'}
    return <div>
        <div style={{
            margin: '0px',
            height: '5vh',
            color: 'black',
            fontSize: '2.75vh',
            backgroundColor: '#DDDDDD',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            opacity: 0.8
        }}>
            <text style={{fontFamily: 'Avenir', marginTop: '0.85vh', color: '#343434'}}>Course List</text>
            <div style={{
                position: 'absolute',
                marginTop: '1vh',
                marginLeft: '8vw',
                float: 'right',
                height: '3vh',
                textAlign: 'center',
                width: '5vw'
            }} onClick={props.clearCourseListHandler}>
                <div style={{fontFamily: 'Avenir', marginTop: '0.25vh', fontSize: '1.2vw', fontWeight: '500',  color: '#343434'}}>
                    <div class="clearButton">CLR</div></div>
            </div>
        </div>

        <div style={{height: '100%', marginBottom: '1vh'}}>
            {courses}
        </div>
    </div>;
};


export default courselist;