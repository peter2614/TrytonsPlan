import React from 'react';
import LE from './LE';
import {ListGroup} from 'react-bootstrap';

const courseinformation = (props) => {
    console.log(props.courseInfo);
    let sections = null;
    let DI = null;
    let FI = null;
    let LE = null;
    
    const LEStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }
    if (props.courseInfo != null){
        sections = props.courseInfo.map((section) => {
            //console.log(section)
            //console.log(section.id)
            console.log(section.DI)
            console.log(section.LE)
            console.log(section.FI)
            console.log("====================");
            if(section.DI != null) {
                DI = <div>{section.DI.map(DI => {
                    return(<div style={LEStyle}>
                        <p>DISCUSSION</p>
                        <p>{DI.section}</p>
                        <p>{DI.building}</p>
                        <p>{DI.room}</p>
                        <p>{DI.start_time}</p>
                        <p>{DI.end_time}</p>
                    </div>)
                })}</div>
            }
            console.log(DI);
            if(section.LE != null) {
                LE = <div>{section.LE.map(LE => {
                    return(<div style={LEStyle}>
                        <p>LECTURE</p>
                        <p>{LE.building}</p>
                        <p>{LE.room}</p>
                        <p>{LE.professor}</p>
                        <p>{LE.start_time}</p>
                        <p>{LE.end_time}</p> 
                    </div>)
                })}</div>
            }
            
            console.log(LE);
            if(section.FI != null) {
                FI = 
                    <div style={LEStyle}>
                        <p>FINAL</p>
                        <p>{section.FI.building}</p>
                        <p>{section.FI.room}</p>
                        <p>{section.FI.date}</p>
                        <p>{section.FI.start_time}</p>
                        <p>{section.FI.end_time}</p>
                    </div>   
            }
            console.log(FI);

            
            return(
            <div>
  
                <p>{section.id}</p>
            </div> )   
            });


            
    }
    

    let LEGUIDE = <div style={LEStyle}>
                    <p>Type</p>
                    <p>Building</p>
                    <p>Room</p>
                    <p>Professor</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                </div>
    if (LE === null) {
        LEGUIDE = null;
    }

    let DIGUIDE = <div style={LEStyle}>
                    <p>Type</p>
                    <p>Section</p>
                    <p>Building</p>
                    <p>Room</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                </div>
    if (DI === null) {
        DIGUIDE = null;
    }

    let FIGUIDE = <div style={LEStyle}>
                    <p>Type</p>
                    <p>Building</p>
                    <p>Room</p>
                    <p>Date</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                </div>
    if (FI === null) {
        FIGUIDE = null;
    }
    return(
        <div style={{backgroundColor: '#DDD'}}>
            {props.courseID}
            <p>COURSE DESCRIPTION GOES HERE</p>
            {LEGUIDE}
            {LE}
            {DIGUIDE}
            {DI}
            {FIGUIDE}
            {FI}
            
        </div>
    )

}

export default courseinformation;