import React from 'react';
import Courses from './Courses.js';
import './Course.css';


const searchbar = (props) => {

    //Stylings
    const courseGroupStyle={
        display: 'block',
        flexDirection: 'column',
        height: '45vh',
        overflowY: 'auto',
        width: '100%',
        marginBottom: '0px',
        marginTop: '-1px',
        backgroundColor: '#333333',
        opacity: 0.95,
    }
    const courseGroupStyleLoading={
        height: '45vh',
        width: '100%',
        marginBottom: '0px',
        marginTop: '-1px',
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection:'column',
        opacity: 0.95,
    }

    //The courses that display in the course offerings section of the side bar, shows a loading circle on start up
    let courses =   <div style={courseGroupStyleLoading}>
        <div className="loader"></div>
        <p style={{fontFamily: 'Avenir', marginTop: '10px', fontSize: '2vw', color:'lightgrey'}}>Loading up Course Offerings...</p>
    </div>

    if(props.loading === false) {
        courses =   <div
            style={courseGroupStyle}>
            <Courses
                courses={props.searchResults}
                courseHandler={props.courseHandler}
                displayCourseInfoHandler={props.displayCourseInfoHandler}
                text={"+"}/>
        </div>
    }

    return (
        <div style={{backgroundColor: '#dddddd', opacity: 0.8}}>
            <button id="tree-CSS" style={{float: "left", position: 'relative', height: '4vh', width: '4vh', marginLeft: '0.5vw', marginTop: '1vh', backgroundColor: '#c0a152', borderColor: '#c0a152'}} onClick={props.displayCourseTreeHandler}></button>
            <div style={{float: "right", marginRight: "1vw", height: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input style={{fontFamily: 'Avenir', paddingLeft: '3%', backgroundColor: '#dddddd', fontSize: '2vh', height: '3vh', width: '14vw'}} type="search" onChange={(event) => props.searchCourseHandler(event)} placeholder="Search Fall 18 Courses"/>
            </div>
            {courses}
        </div>
    );
}

export default searchbar;