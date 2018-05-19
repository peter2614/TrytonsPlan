import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class searchbar extends Component {
    state = {
        courses: [],
    }

    handleChange = (event) => {
        const condition = new RegExp(event.target.value, 'i');
        const courses = this.props.courses.filter(course => {
            return condition.test(course.name);
        });
        this.setState({courses: courses});
    }

    render() {
        let courses = null;
            courses = 
            <ListGroup 
            style={{flex: '1 1 0', display: 'flex', flexDirection: 'column', height: '450px', overflowY: 'auto', width: '100%', marginLeft: '-1px', marginBottom: '0px', marginTop: '-1px'}}>
            <Courses 
            courses={this.state.courses} 
            courseHandler={this.props.courseHandler}
            text={"✔"}/> 
            </ListGroup>
    

        const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
        return (
            <div>
                <div style={searchBarStyle}>
                    <input style={{backgroundColor: 'lightgrey'}} type="text" onChange={(event) => this.handleChange(event)} placeholder="Search For Courses"/>
                    
                </div>
                <hr className="hr1"/>
                {courses}
                    
                
            </div>
        );
    }
}

export default searchbar;