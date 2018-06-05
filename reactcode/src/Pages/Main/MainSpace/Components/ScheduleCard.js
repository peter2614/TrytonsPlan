import React from 'react';
import CalendarIcon from '../../../../Assets/calendarIcon.png';

const schedulecard = (props) => {
    const scheduleCardStyle = {
        marginTop: '1vw',
        marginLeft: '2%',
        padding: '1vw',
        width: '47%',
        height: '40vh',
        backgroundColor: '#268',
        overflowY: 'auto',
    }
    //width: 47%
    let sections = props.sections.map(section => {
        let days = '';
        section.day.forEach(day => {
            if (day === 1) {days += "M"}
            if (day === 2) {days += "T"}
            if (day === 3) {days += "W"}
            if (day === 4) {days += "Th"}
            if (day === 5) {days += "F"}
        })
        let name = null;
        name = <th style={{textShadow: "1.5px 1.5px 0px #000", fontSize: '1.1vw', color: '#dddddd'}}>{section.courseID}</th>
        
        /*
        if(section.courseID.includes("PHYS")) {
            name = <th style={{textShadow: "1.5px 1.5px 0px #000", fontSize: '1.1vw', color: '#99C'}}>{section.courseID}</th>
        }
        */

        return(
            <tr key={section.courseID}>
                {name}
                <th style={{color: 'lightgrey', fontSize: '.9vw'}}>{days}</th>
                <th style={{color: 'lightgrey', fontSize: '.9vw'}}>{formatTime(section.startingTime)}-{formatTime(section.endingTime)}</th>
                <th style={{color: 'lightgrey', fontSize: '.9vw'}}>{section.location}</th>
                <th style={{color: 'lightgrey', fontSize: '.9vw'}}>{section.professor}</th>
                <th style={{color: 'lightgrey', fontSize: '.9vw'}}>{section.sectionID}</th>


            </tr>
        )
    });


    function formatTime(time) {
        let append = 'am';
        if (time !== "N/A" && time !== "TBA") {
            if (time >= 1200) {
                append = 'pm';
            }
            if (time > 1300) {
                time = time-1200;
            }
            time = time.toString();
            time = [time.slice(0,time.length/2), ':', time.slice(time.length/2)].join('');
            time += append;
        }
        return time;
    }

    return <div style={scheduleCardStyle}>
        <div style={{
            color: 'lightgrey',
            fontSize: '20px',
            float: 'left',
            fontSize: '1.5vw',
            fontWeight: '800'
        }}>{props.scheduleID}</div>
        <button id="close-CSS" style={{
            backgroundColor: '#49B',
            borderColor: '#49B',
            marginTop: '-.5vw',
            marginLeft: '-4vw',
            marginRight: '-.5vw',
            position: 'relative',
            height: '2.3vw',
            width: '2.3vw',
            color: 'black',
            fontSize: '12px',
            float: 'right',
            fontSize: '1.5vw',
            fontWeight: '300'
        }} onClick={(event) => props.displayCalendarHandler(props.sections, props.scheduleID, true)}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <table style={{width: '25vw', color: 'lightgrey'}}>
                <tbody>
                <tr>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>GPA</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>Prof Score</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>Study Hrs</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>Time Efficiency</th>
                </tr>
                <tr>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>{props.GPA}</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>{props.profScore}</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}> {props.timeCommitment}</th>
                    <th style={{textAlign: 'center', fontSize: '1.1vw'}}>{props.timeUsage}%</th>
                </tr>
                </tbody>
            </table>
        </div>
        <table>
            <tbody>
            {sections}
            </tbody>
        </table>
    </div>

}

export default schedulecard;