import React from 'react';
import './OptionsBar.css';

const OptionsBar = (props) => {
    const buttonStyle = {
        height: '4vh',
        width: '9vw',
    }
    const buttonStyleSmall = {
        height: '4vh',
        width: '6vw',
    }
    
    
    let generateButtonStyle = "generateScheduleEnabled";
    let title = "Generate Schedules"
    let disabled = false;
    if (props.sizeOfCourseList == 0) {
        generateButtonStyle = "generateScheduleDisabled";
        title = "Need 2 more classes in your Course List."
        disabled = true;
        switchButtonStyle = "switchButtonDisabled";
    } else if (props.sizeOfCourseList == 1) {
        title = "Need 1 more class in your Course List.";
        generateButtonStyle = "generateScheduleDisabled";
        disabled = true;
        
    }
    let switchButtonDisabled = true;
    let switchButtonStyle = "switchButtonDisabled";
    let switchButtonTitle = "No Schedules to show!";
    if(props.filteredSchedules != null) {
        switchButtonDisabled = false;
        switchButtonStyle = "switchButtonEnabled";
        switchButtonTitle = "Switch views."
    }


    return(
        <div>
            <div className="buttongroup" style={{float: 'left', margin: '1vh', fontSize: '.9vw'}}>
                <div style={{display: 'flex'}}>
                    <p style={{paddingRight: '.5vw', marginTop: '.5vh', color: 'lightgrey', fontWeight: '800'}}>Sort: </p>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("GPA")}>GPA</button>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("PROF")}>Prof Score</button>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("TIMECOMMITMENT")}>Study Hrs</button>
                    <button style={buttonStyle} onClick={ event => props.rankScheduleHandler("TIMEEFFICIENCY")}>Time Efficiency</button>
                </div>
            </div>
            <div style={{marginLeft: '.3vw', display: 'flex', float: 'left', marginTop: '1.6vh', fontSize: '.8vw'}}>
                <p style={{paddingRight: '.3vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Min/Max Units: </p>
                <input style={{height: '3vh', width: '2vw'}} onChange={event => props.minUnitsHandler(event)} type="number" />
                <input style={{height: '3vh', width: '2vw'}} onChange={event => props.maxUnitsHandler(event)} type="number" />
                <p style={{marginLeft: '.5vw', paddingRight: '.5vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Start/End: </p>
                <input style={{height: '3vh', width: '5vw'}} onChange={event => props.startingTimeHandler(event)} type="time"/>
                <input style={{height: '3vh', width: '5vw'}} onChange={event => props.endingTimeHandler(event)} type="time"/>
            </div>
            <div>
            <button title = {switchButtonTitle} className={switchButtonStyle} disabled={switchButtonDisabled}  onClick={props.switchViewHandler}></button>
                <button title = {title} className={generateButtonStyle} disabled={disabled}  onClick={props.generateScheduleHandler}>Generate Schedules</button>
            </div>
        </div>
    );

}

export default OptionsBar;