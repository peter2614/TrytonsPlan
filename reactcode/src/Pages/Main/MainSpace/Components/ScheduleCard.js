import React from 'react';

const schedulecard = (props) => {
    const scheduleCardStyle = {
        position: 'relative',
        marginTop: '2vh',
        marginLeft: '2vw',
        marginBottom: '1.5vh',
        padding: '1vw',
        width: '62vh',
        height: '40vh',
        backgroundColor: '#37506a',
    };
    //width: 47%

    return <div style={scheduleCardStyle}>
        <p style={{color: '#cccccc', textAlign: 'center'}}>Schedule {props.index}</p>


    </div>

}

export default schedulecard;