import React from 'react';
import { Button } from 'react-bootstrap';

const course = (props) => {
    

    const textStyle = {
        textAlign: 'left',
        margin: '0px',
        color: 'lightgrey'
    }
    const buttonStyle = {
        margin: '1px',
        width: '25px',
        float: 'right',
        height: '25px',
        textAlign: 'center',
        padding: '0px'

    }



    return (
        <p style={textStyle} >{props.name} - {props.description} <Button bsStyle="primary" style={buttonStyle} onClick={props.courseHandler} >{props.text}</Button></p>
        /*
        <div style={courseStyle}>
        <p style={textStyle}>{props.name} - {props.description} <button style={buttonStyle} /></p>
        </div>*/
    )
}

export default course;