import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


const courselist = (props) => {



    let courses = 
        <ListGroup 
        style={{position: 'relative', flex: '1 1 0', display: 'flex', flexDirection: 'column', minHeight: '35vh', maxHeight: '35vh', overflowY: 'auto', width: '100%', marginBottom: '0px', marginLeft: '-1px', backgroundColor: '#333'}}>
        <Courses 
        courses={props.courses} 
        courseHandler={props.courseHandler} 
        text={"🗙"}/> 
        </ListGroup>
        
        
        //const style = {height: '520px', padding: '0px', marginBottom: '0px', marginTop: '-1px'}
        return (
            <div>
                <p style={{margin: '0px', padding: '1vh', color: 'black', fontSize: '2vh', backgroundColor: '#CCC'}}>Course List</p>
                <div style={{height: '100%', marginTop: '0px'}}>
                    {courses}
                </div>
            </div>
        );
}


export default courselist;