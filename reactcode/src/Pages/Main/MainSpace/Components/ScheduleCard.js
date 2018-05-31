import React from 'react';

const schedulecard = (props) => {
    const scheduleCardStyle = {
        marginTop: '1vw',
        marginLeft: '2%',
        padding: '1vw',
        width: '47%',
        height: '40vh',
        backgroundColor: '#258'
    }
    //width: 47%

    return(
        <div style={scheduleCardStyle}>
            <p style={{color: 'lightgrey'}}>Schedule {props.index}</p>
        
        
        </div>
    )

}

export default schedulecard;