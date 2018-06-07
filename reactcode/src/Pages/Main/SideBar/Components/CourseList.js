import React from 'react';
import Courses from './Courses.js';
import './CourseList.css';
import {ListGroup} from 'react-bootstrap';


const courselist = (props) => {

    const courseGroupStyle={
        display: 'block',
        flexDirection: 'column',
        height: '30vh',
        overflowY: 'auto',
        width: '100%',
        marginBottom: '2vh',
        marginLeft: '0px',
        backgroundColor: '#3c3c3c'}
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
            fontFamily: 'Avenir',
            margin: '0px',
            height: '5vh',
            color: 'black',
            fontSize: '2.75vh',
            backgroundColor: '#333333',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <text style={{marginTop: '0.85vh', color: '#dddddd'}}>Course List</text>
                <div style={{
                    position: 'absolute',
                    marginTop: '1vh',
                    marginLeft: '8vw',
                    float: 'right',
                    height: '3vh',
                    textAlign: 'center',
                    width: '5vw'
                }} onClick={props.clearCourseListHandler}>
                    <div style={{fontFamily: 'Avenir', marginTop: '0.25vh', fontSize: '1.3vw', fontWeight: '500',  color: '#dddddd'}}>
                        <div class="clearButton">CLR</div></div>
                </div>
            </div>

        <div style={{height: '100%', marginTop: '0px'}}>
            {courses}
        </div>
    </div>;
}


export default courselist;