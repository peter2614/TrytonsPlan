import React from 'react';
import './CourseInformation.css'

const courseinformation = (props) =>  props.allInfo.map((section, index) => {

    let sections = null;
    let DI = null;
    let FI = null;
    let LE = null;
    let GPA = 'N/A';
    let GPAExpected = 'N/A';
    let PercentRecommend = 'N/A';
    let StudyHours = 'N/A';
    let professorInfo = null;

    if (props.allInfo != null){
            //handle professor information
            if (section.professor != null) {
                professorInfo = section.professor.map(professor => {
                    if(professor != null) {
                    PercentRecommend = professor.score*100;
                     return(
                        <tr>
                            <th style={{color: '#722'}}>Professor Info:</th>
                            <th style={{color: '#722'}}>GPA: {professor.gpaActual.toString().slice(0,4)} </th>
                            <th style={{color: '#722'}}>Expected GPA: {professor.gpaExpected.toString().slice(0,4)} </th>
                            <th style={{color: '#722'}}>Recommend: {PercentRecommend.toString().slice(0,4) + "%"} </th>
                            <th style={{color: '#722'}}>StudyHours: {professor.timeCommitment.toString().slice(0,4) + "hrs"} </th>
                        </tr>);

                     } else {
                         return <tr>
                             <th style={{color: '#722'}}>Professor Info:</th>
                             <th style={{color: '#722'}}>Unknown</th>
                             </tr>
                     };
                })
                /*
                GPA = section.professor.gpaActual.toString().slice(0,4);
                GPAExpected = section.professor.gpaExpected.toString().slice(0,4);
                PercentRecommend = section.professor.score*100;
                PercentRecommend = PercentRecommend.toString().slice(0,4) + "%";
                StudyHours = ;
                */
            }
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
        
                    return(<tr key={index}>
                        <th>DISCUSSION</th>
                        <th>{weekdays}</th>
                        <th>{formattedStartTime}-{formattedEndTime}</th>
                        
                        <th>{DI.building}</th>
                        <th>{DI.room}</th> 
                        <th>{DI.section}</th>
                        
                    </tr>)
                })
            }
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
                        <th> </th>
                    </tr>   
            }
        
        }

            
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

    let FIGUIDE = <tr style={{color: '#349'}}>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Building</th>
                    <th>Room</th>
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