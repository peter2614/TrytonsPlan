import React from 'react';

const schedulecard = (props) => {
    const scheduleCardStyle = {
        marginTop: '30px',
        marginLeft: '30px',
        padding: '10px',
        width: '350px',
        height: '450px',
        backgroundColor: '#258'
    }

    return(
        <div style={scheduleCardStyle}><p style={{color: 'lightgrey'}}>All about the course</p></div>
    )

}

export default schedulecard;