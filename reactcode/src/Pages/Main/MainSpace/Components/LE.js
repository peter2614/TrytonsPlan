import React from 'react';
import {ListGroupItem} from 'react-bootstrap';
const LE = (props) => props.LE.map (LE => {

    return (<ListGroupItem>
               <p>{LE.building}</p>
                <p>{LE.room}</p>
                <p>{LE.Professor}</p>
                <p>{LE.start_time}</p>
                <p>{LE.end_time}</p> 
                </ListGroupItem>)
});

export default LE;