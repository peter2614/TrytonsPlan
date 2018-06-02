import React from 'react';

const OptionsBar = (props) => {
    const buttonStyle = {
        height: '4vh',
        width: '9vw',
    }
    const buttonStyleSmall = {
        height: '4vh',
        width: '6vw',
    }

    return(
        <div>
            <div className="buttongroup" style={{float: 'left', margin: '1vh', fontSize: '2vh'}}>
                <div style={{display: 'flex'}}>
                    <p style={{paddingRight: '.5vw', marginTop: '.5vh', color: 'lightgrey', fontWeight: '800'}}>Sort by: </p>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("GPA")}>GPA</button>
                    <button style={buttonStyleSmall} onClick={ event => props.rankScheduleHandler("PROF")}>Prof Score</button>
                    <button style={buttonStyle} onClick={ event => props.rankScheduleHandler("TIMEEFFICIENCY")}>Time Efficiency</button>
                    <button style={buttonStyle} onClick={ event => props.rankScheduleHandler("TIMECOMMITMENT")}>Time Commitment</button>
                </div>
            </div>
            <div style={{marginLeft: '1vw', display: 'flex', float: 'left', marginTop: '1.6vh', fontSize: '2vh'}}>
                <p style={{paddingRight: '.3vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Max Units: </p>
                <input style={{height: '3vh', width: '2vw'}} onChange={event => props.maxUnitsHandler(event)} />
                <p style={{marginLeft: '.5vw', paddingRight: '.5vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Start-End: </p>
                <input style={{height: '3vh', width: '4vw'}} onChange={event => props.maxStartingTimeHandler(event)} />
                <input style={{height: '3vh', width: '4vw'}} onChange={event => props.maxEndingTimeHandler(event)} />
            </div>
            <div>
                <button style={{float: 'right', margin: '1.2vh', marginRight: '3vw', fontSize: '2vh', width: '14vw', height: '4vh'}} onClick={props.generateScheduleHandler}>Generate Schedules</button>
            </div>
        </div>
    );

}

export default OptionsBar;