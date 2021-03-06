import React from 'react';
import './OptionsBar.css';

const OptionsBar = (props) => {
    const buttonStyle = {
        height: '4vh',
        width: '9vw',
        marginTop: '.1vh'
    }
    const buttonStyleSmall = {
        height: '4vh',
        width: '6vw',
        marginTop: '.1vh'
    }
    
    let switchButtonStyle = "switchButtonDisabled";
    let generateButtonStyle = "generateScheduleEnabled";
    let title = "Generate Schedules"
    let disabled = false;
    if (props.sizeOfCourseList === 0) {
        generateButtonStyle = "generateScheduleDisabled";
        title = "Need 2 more classes in your Course List."
        disabled = true;
        switchButtonStyle = "switchButtonDisabled";
    } else if (props.sizeOfCourseList === 1) {
        title = "Need 1 more class in your Course List.";
        generateButtonStyle = "generateScheduleDisabled";
        disabled = true;
        
    }
    let switchButtonDisabled = true;
    let switchButtonTitle = "No Schedules to show!";
    if(props.filteredSchedules != null) {
        switchButtonDisabled = false;
        switchButtonStyle = "switchButtonEnabled";
        switchButtonTitle = "Switch views."
    }

    var elements = document.getElementsByClassName("arrow-togglable");
    var currentIndex = 0;

    // for switching between input fields using up and down arrow keys
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 38:
          currentIndex = (currentIndex === 0) ? elements.length - 1 : --currentIndex;
          elements[currentIndex].focus();
          break;
        case 40:
          currentIndex = ((currentIndex + 1) === elements.length) ? 0 : ++currentIndex;
          elements[currentIndex].focus();
          break; 
        case 13:
          currentIndex = ((currentIndex + 1) === elements.length) ? 0 : ++currentIndex;
          elements[currentIndex].focus();
          break;
        default:
      }
    };

    return(
        <div>
            <div style={{marginLeft: '.3vw', display: 'flex', float: 'right', marginTop: '1.6vh', fontSize: '.8vw', marginRight: '1.75vw'}}>
                <p style={{paddingRight: '.3vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Min/Max Units: </p>
                <input placeholder="0" class="arrow-togglable" tabIndex="1" style={{height: '3vh', width: '2vw'}} onChange={event => props.minUnitsHandler(event)} />
                <input placeholder="16" class="arrow-togglable" tabIndex="2" style={{height: '3vh', width: '2vw'}} onChange={event => props.maxUnitsHandler(event)} />
                <p style={{marginLeft: '.5vw', paddingRight: '.5vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Start/End: </p>
                <input placeholder="Start Time" class="arrow-togglable" tabIndex="3" style={{height: '3vh', width: '5vw'}} onChange={event => props.startingTimeHandler(event)} />
                <input placeholder="End Time" class="arrow-togglable" tabIndex="4" style={{height: '3vh', width: '5vw'}} onChange={event => props.endingTimeHandler(event)} />
            </div>
            <div className="buttongroup" style={{float: 'right', margin: '1vh', fontSize: '.9vw', marginBottom: '0vh'}}>
                <div style={{display: 'flex'}}>
                    <p style={{paddingRight: '.5vw', marginTop: '.7vh', color: 'lightgrey', fontWeight: '800'}}>Sort: </p>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("GPA")}>GPA</button>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("PROF")}>Prof Score</button>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("TIMECOMMITMENT")}>Study Hrs</button>
                    <button title="Calculated as time spent in lecture / (time last class ends - time first class starts)" style={buttonStyle} onClick={ event => props.rankScheduleHandler("TIMEEFFICIENCY")}>Time Efficiency</button>
                </div>
            </div>
            <div>
                <button title = {switchButtonTitle} className={switchButtonStyle}  style={{marginRight: '1vw', marginBottom: '-.1vh'}} disabled={switchButtonDisabled}  onClick={props.switchViewHandler}>⇆</button>
                <button title = {title} className={generateButtonStyle}  disabled={disabled} style={{marginBottom: '-.1vh'}} onClick={props.generateScheduleHandler}>Generate Schedules</button>
            </div>
            
        </div>
    );

}

export default OptionsBar;