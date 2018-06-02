import React from 'react';

const schedulecard = (props) => {
    const scheduleCardStyle = {
        marginTop: '1vw',
        marginLeft: '2%',
        padding: '1vw',
        width: '47%',
        height: '40vh',
        backgroundColor: '#258',
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
        
        return(
        <tr key={section.courseID}>

            <th style={{color: '#F97'}}>{section.courseID}</th>
            <th style={{color: 'lightgrey'}}>{days}</th>
            <th style={{color: 'lightgrey'}}>{formatTime(section.startingTime)}-{formatTime(section.endingTime)}</th>
            <th style={{color: 'lightgrey'}}>{section.sectionID}</th>
            

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

    return(
        <div style={scheduleCardStyle}>
            <div style={{color: 'lightgrey', fontSize: '20px'}}>Schedule {props.scheduleID}</div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <table style={{width: '25vw', color: 'lightgrey'}}>
                    <tbody>
                        <tr >
                            <th style={{textAlign: 'center'}}>GPA</th>
                            <th style={{textAlign: 'center'}}>Prof Score</th>
                            <th style={{textAlign: 'center'}}>Time Efficiency</th>
                            <th style={{textAlign: 'center'}}>Time Commitment</th>
                        </tr>
                        <tr>
                            <th style={{textAlign: 'center'}}>{props.GPA}</th>
                            <th style={{textAlign: 'center'}}>{props.profScore}</th>
                            <th style={{textAlign: 'center'}}>{props.timeUsage}</th>
                            <th style={{textAlign: 'center'}}> {props.timeCommitment}</th>
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
    )

}

export default schedulecard;