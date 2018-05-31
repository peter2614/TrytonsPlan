import React from 'react';
import './CourseInformation.css'

const courseinformation = (props) =>  props.allInfo.map((section, index) => {

    let sections = null;
    let DI = null;
    let FI = null;
    let LE = null;
    let professorInfo = null;

    if (props.allInfo != null){

            //handle professor information
            if (section.professor != null) {
                professorInfo = section.professor.map(professor => {
                    if(professor != null) {
                    let PercentRecommend = professor.score*100;
                     return(
                        <tr key={index}>
                            <th style={{color: '#722'}}>Professor Info:</th>
                            <th style={{color: '#722'}}>GPA: {professor.gpaActual.toString().slice(0,4)} </th>
                            <th style={{color: '#722'}}>Expected GPA: {professor.gpaExpected.toString().slice(0,4)} </th>
                            <th style={{color: '#722'}}>Recommend: {PercentRecommend.toString().slice(0,4) + "%"} </th>
                            <th style={{color: '#722'}}>StudyHours: {professor.timeCommitment.toString().slice(0,4) + "hrs"} </th>
                            <th></th>
                        </tr>);

                     } else {
                         return <tr key={index}>
                             <th style={{color: '#722'}}>Professor Info:</th>
                             <th style={{color: '#722'}}>Unknown</th>
                             <th></th>
                             <th></th>
                             <th></th>
                             <th></th>
                             </tr>
                     };
                })
            }

            
            //Create rows for each DISCUSSION
            if(section.course.DI != null) {
                DI = section.course.DI.map((DI, index) => {
                    let weekdays = '';
                    if (DI.day != null) {
                    DI.day.forEach(day => {
                            if (day === 1){weekdays += 'M'}
                            if (day === 2){weekdays += 'T'}
                            if (day === 3){weekdays += 'W'}
                            if (day === 4){weekdays += 'Th'}
                            if (day === 5){weekdays += 'F'}
                        });
                    }
                    let formattedStartTime = formatTime(DI.start_time);
                    let formattedEndTime = formatTime(DI.end_time);
        
                    return(
                        <tr key={index}>
                            <th>DISCUSSION</th>
                            <th>{weekdays}</th>
                            <th>{formattedStartTime}-{formattedEndTime}</th>
                            
                            <th>{DI.building}</th>
                            <th>{DI.room}</th> 
                            <th>{DI.section}</th>
                        </tr>
                        )
                })
            }

            //Create rows for each LECTURE
            if(section.course.LE != null) {
                LE = section.course.LE.map((LE, index) => {
                    let weekdays = '';
                    if (LE.day != null) {
                        LE.day.forEach(day => {
                            if (day === 1){weekdays += 'M'}
                            if (day === 2){weekdays += 'T'}
                            if (day === 3){weekdays += 'W'}
                            if (day === 4){weekdays += 'Th'}
                            if (day === 5){weekdays += 'F'}
                        });
                    }
                    let formattedStartTime = formatTime(LE.start_time);
                    let formattedEndTime = formatTime(LE.end_time);
                    
                    //handle co-taught classes, puts an & inbetween their names
                    if (typeof LE.professor == "string") {
                        LE.professor = LE.professor.split('\r\n');
                        LE.professor.forEach( (professor,index) => {
                            if (index > 0) {
                                LE.professor[index] = "& " + LE.professor[index]; 
                            }
                        });
                    }      
                    
                    return(    
                        <tr key={index}>
                            <th>LECTURE</th>
                            <th>{weekdays}</th>
                            <th>{formattedStartTime}-{formattedEndTime}</th>  
                            <th>{LE.building}</th>
                            <th>{LE.room}</th>    
                            <th>{LE.professor}</th>        
                        </tr> 
                    )
                })
            }
            
            //Create a row for the FINAL
            if(section.course.FI != null) {
                let formattedStartTime = formatTime(section.course.FI.start_time);
                let formattedEndTime = formatTime(section.course.FI.end_time);
                FI = 
                    <tr>
                        <th>FINAL</th>
                        <th>{section.course.FI.date}</th>
                        <th>{formattedStartTime}-{formattedEndTime}</th>
                        <th>{section.course.FI.building}</th>
                        <th>{section.course.FI.room}</th>
                        <th></th>
                    </tr>   
            }
        }

    //For formatting the time a class starts and ends        
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

    //Create a row saying what each column in the table is
    let LEGUIDE = <tr style={{color: '#349'}}>
                    <th>Type</th>
                    <th>Days</th>       
                    <th>Time</th>          
                    <th>Building</th>
                    <th>Room</th>    
                    <th>Professor</th>
                </tr>
    if (LE === null) {
        LEGUIDE = null;
    }

    //Create a row saying what each column in the table is
    let DIGUIDE = <tr style={{color: '#349'}}>
                    <th>Type</th>
                    <th>Days</th>               
                    <th>Time</th>            
                    <th>Building</th>
                    <th>Room</th>
                    <th>Section</th>

                </tr>
    if (DI === null) {
        DIGUIDE = null;
    }

    //Create a row saying what each column in the table is
    let FIGUIDE = <tr style={{color: '#349'}}>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Building</th>
                    <th>Room</th>
                    <th></th>
                </tr>
    if (FI === null) {
        FIGUIDE = null;
    }
    
    return(
        <div style={{backgroundColor: '#DDD', paddingTop: '2vh'}}> 
            <p style={{fontSize: '1.5vw', fontWeight: '400'}}>Section ID - {section.course.id}</p>
            <div style={{width: '80%', marginLeft: '10%'}}>
                <table>
                    <tbody>
                        {LEGUIDE}   
                        {LE}
                
                        {DIGUIDE}
                        {DI}

                        {FIGUIDE}
                        {FI}
                        
                        {professorInfo}   
                    </tbody>
                </table>          
            </div>
            <hr style={{marginTop: '-1px'}}/>
        </div>
    )
});


    

export default courseinformation;