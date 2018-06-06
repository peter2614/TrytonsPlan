import React from 'react';
import Courses from './Courses.js';
import {ListGroup} from 'react-bootstrap';


const courselist = (props) => {

    const courseGroupStyle={
        display: 'block', 
        flexDirection: 'column', 
        height: '40vh', 
        overflowY: 'auto', 
        width: '100%', 
        marginBottom: '0px', 
        marginLeft: '0px', 
        backgroundColor: '#333'}
    let courses = 
        <div
        style={courseGroupStyle}>
        <Courses 
        courses={props.courses} 
        courseHandler={props.courseHandler} 
        displayCourseInfoHandler={props.displayCourseInfoHandler}
        text={"-"}/> 
        </div>
        
        
        //const style = {height: '520px', padding: '0px', marginBottom: '0px', marginTop: '-1px'}
        return (
            <div>
                <div style={{margin: '0px', height: '5vh', color: 'black', fontSize: '2.5vh', backgroundColor: '#CCC', display: 'flex', alignContent:'center', justifyContent:'center'}}>
                    <text style={{marginTop:'.75vh'}}>Course List</text>
                    <button style={{position: 'absolute', marginTop:'1vh', marginLeft:'8vw', float: 'right', height: '3vh', textAlign: 'center', width:'5vw'}} onClick={props.clearCourseListHandler}>
                        <div style={{marginTop: '-.5vh', fontSize:'1.3vw'}}>CLR</div>
                    </button>
                </div>
                <div style={{height: '100%', marginTop: '0px'}}>
                    {courses}
                </div>
            </div>
        );
}


export default courselist;