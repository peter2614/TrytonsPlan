import React from 'react';

const OptionsBar = (props) => {
    const buttonStyle = {
        height: '4vh',
        width: '6vw',
        maxWidth: '6vw'
    }
    return(
        <div>
            <div className="buttongroup" style={{float: 'left', margin: '1vh', fontSize: '2vh'}}>
                <div style={{display: 'flex'}}>
                <p style={{paddingRight: '.5vw', marginTop: '.5vh', color: 'lightgrey', fontWeight: '800'}}>Sort by: </p>
                <button style={buttonStyle} >GPA</button>
                <button style={buttonStyle}>Time</button>
                <button style={buttonStyle}>Prof Score</button>
                </div>
            </div>
            <div style={{marginLeft: '2vw', display: 'flex', float: 'left', marginTop: '1.6vh', fontSize: '2vh'}}>
                <p style={{paddingRight: '.5vw', marginTop: '.2vh', color: 'lightgrey', fontWeight: '800'}}>Max Units: </p>
                <input style={{height: '3vh', width: '4vw'}} />
            </div>
            <div>
                <button style={{float: 'right', margin: '1.2vh', marginRight: '3vw', fontSize: '2vh', width: '10vw', height: '4vh'}}>Generate Schedules</button>
            </div>
        </div>
    );

}

export default OptionsBar;