import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const searchbar = (props) => {

        let courses = null;
            courses = 
            <ListGroup 
            style={{position: 'relative', flex: '1 1 0', display: 'flex', flexDirection: 'column', minHeight: '45vh', maxHeight: '45vh', overflowY: 'auto', minWidth: '100%', marginLeft: '-1px', marginBottom: '0px', marginTop: '-1px', backgroundColor: '#333'}}>
            <Courses 
            courses={props.searchResults} 
            courseHandler={props.courseHandler}
            text={"✔"}/> 
            </ListGroup>
    

        const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
        return (
            <div>
                <div style={{height: '5vh'}}>
                    <input style={{backgroundColor: 'lightgrey', height: '3vh', width: '25vh', marginTop:'1vh',  marginBottom:'1vh', fontSize: '2vh' }} type="text" onChange={(event) => props.searchCourseHandler(event)} placeholder="Search For Courses"/> 
                </div>

                {courses}
                    
                
            </div>
        );
    }

export default searchbar;