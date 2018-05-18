import React, {Component} from 'react';
import Courses from './Courses.js';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class searchbar extends Component {

    render() {
        let courses = null;
        courses = <ListGroup style={{flex: '1 1 0', display: 'flex', flexDirection: 'column', maxHeight: '450px', overflowY: 'auto', width: '311px', marginLeft: '-1px', marginBottom: '0px', marginTop: '-2px'}}>
        <Courses courses={this.props.courses} courseHandler={this.props.courseHandler} text={"✔"}/> </ListGroup>

        const searchBarStyle = {marginTop: '10px', marginBottom: '10px'}
        return (
            <div>
                <div style={searchBarStyle}>
                    <input style={{backgroundColor: 'lightgrey'}} type="text"/>
                </div>
                <hr className="hr1"/>
                {courses}
                    
                
            </div>
        );
    }
}

export default searchbar;