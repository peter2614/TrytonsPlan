import React from 'react';
//import 'react-week-calendar/dist/style.css';
import './Calendar.css'
import WeekCalendar from 'react-week-calendar';
import moment from 'moment';

const Calendar = (props) => {

    let selectedIntervals = [];
    let additionalIntervals = [];
    if(props.showFinals === false) {
        selectedIntervals = [];
        additionalIntervals = [];
        if(props.schedule != null && props.schedule.constructor === Array ) {
            props.schedule.forEach(section => {
                let startTimeHr = null;
                let startTimeMin = null;
                let endTimeHr = null;
                let endTimeMin = null;
                if(section.startingTime < 1000) {
                    startTimeHr=parseInt(section.startingTime.toString().substring(0,1), 10);
                    startTimeMin=parseInt(section.startingTime.toString().substring(1,3), 10);

                } else {
                    startTimeHr=parseInt(section.startingTime.toString().substring(0,2), 10);
                    startTimeMin=parseInt(section.startingTime.toString().substring(2,4), 10);
                }
                if(section.endingTime < 1000) {
                    endTimeHr=parseInt(section.endingTime.toString().substring(0,1), 10);
                    endTimeMin=parseInt(section.endingTime.toString().substring(1,3), 10);
                } else {
                    endTimeHr=parseInt(section.endingTime.toString().substring(0,2), 10);
                    endTimeMin=parseInt(section.endingTime.toString().substring(2,4), 10);
                }
                let value = section.courseID;

                section.day.forEach(day =>{
                    let interval = {
                        start: moment('20180514').hours(startTimeHr).minutes(startTimeMin),
                        end: moment('20180514').hours(endTimeHr).minutes(endTimeMin),
                        value: value + " - LE " + section.sectionID,
                    }
                    interval.start.add(day-1, 'd');
                    interval.end.add(day-1, 'd');
                    selectedIntervals.push(interval);
                });
                
        })}

        if(props.additionalIntervals != null && props.additionalIntervals.constructor === Array ) {
    
            props.additionalIntervals.forEach(section => {
                
                if (section.startingTime == null || section.endingTime == null) {
                    return;
                }
            let startTimeHr = null;
            let startTimeMin = null;
            let endTimeHr = null;
            let endTimeMin = null;
            if(section.startingTime < 1000) {
                startTimeHr=parseInt(section.startingTime.toString().substring(0,1), 10);
                startTimeMin=parseInt(section.startingTime.toString().substring(1,3), 10);

            } else {
                startTimeHr=parseInt(section.startingTime.toString().substring(0,2), 10);
                startTimeMin=parseInt(section.startingTime.toString().substring(2,4), 10);
            }
            if(section.endingTime < 1000) {
                endTimeHr=parseInt(section.endingTime.toString().substring(0,1), 10);
                endTimeMin=parseInt(section.endingTime.toString().substring(1,3), 10);
            } else {
                endTimeHr=parseInt(section.endingTime.toString().substring(0,2), 10);
                endTimeMin=parseInt(section.endingTime.toString().substring(2,4), 10);
            }
            
            section.day.forEach(day =>{
                let interval = {
                    start: moment('20180514').hours(startTimeHr).minutes(startTimeMin),
                    end: moment('20180514').hours(endTimeHr).minutes(endTimeMin),
                    value: section.value,
                }
                interval.start.add(day-1, 'd');
                interval.end.add(day-1, 'd');
                selectedIntervals.push(interval);
            });    
        })}
    } else {

        selectedIntervals = [];
        additionalIntervals = [];
        if(props.finalIntervals != null && props.finalIntervals.constructor === Array ) {
            props.finalIntervals.forEach(section => {
                let startTimeHr = null;
                let startTimeMin = null;
                let endTimeHr = null;
                let endTimeMin = null;
                if(section.startingTime < 1000) {
                    startTimeHr=parseInt(section.startingTime.toString().substring(0,1), 10);
                    startTimeMin=parseInt(section.startingTime.toString().substring(1,3), 10);

                } else {
                    startTimeHr=parseInt(section.startingTime.toString().substring(0,2), 10);
                    startTimeMin=parseInt(section.startingTime.toString().substring(2,4), 10);
                }
                if(section.endingTime < 1000) {
                    endTimeHr=parseInt(section.endingTime.toString().substring(0,1), 10);
                    endTimeMin=parseInt(section.endingTime.toString().substring(1,3), 10);
                } else {
                    endTimeHr=parseInt(section.endingTime.toString().substring(0,2), 10);
                    endTimeMin=parseInt(section.endingTime.toString().substring(2,4), 10);
                }
                let value = section.value;
                if (section.day != null) {
                section.day.forEach(day =>{
                    let interval = {
                        start: moment('20180514').hours(startTimeHr).minutes(startTimeMin),
                        end: moment('20180514').hours(endTimeHr).minutes(endTimeMin),
                        value: value,
                    }
                    interval.start.add(day-1, 'd');
                    interval.end.add(day-1, 'd');
                    selectedIntervals.push(interval);
                });
            }
                
        })}
    }
    let calendarHeight = (94-parseInt(props.heightOfMainSpace.replace("vh", ''), 10)).toString() + "vh";

   let button = null; 
   if (props.displayCalendar) {
        button = <div>
                        <button onClick={props.raiseCalendarHandler} style={{marginLeft:'13vw', position:'relative', float:'left', height:'2vh', width:'1vw', marginTop:'-4vh', backgroundColor: '#49B', color: 'lightgrey', borderColor: '#49B', fontSize:'.4vw'}}><text style={{marginLeft: '-.2vw'}}>▲</text></button>
                        <button onClick={props.lowerCalendarHandler} style={{marginLeft:'13vw', position:'relative', float:'left', height:'2vh', width:'1vw', marginTop:'-2vh', backgroundColor: '#49B', color: 'lightgrey', borderColor: '#49B', fontSize:'.4vw'}}><text style={{marginLeft: '-.2vw'}}>▼</text></button>
                        <button onClick={props.showFinalsHandler}    style={{marginLeft:'5vw', position:'relative', float:'left', height:'4vh', width:'5vw', marginTop:'-4vh', backgroundColor: '#49B', color: 'lightgrey', borderColor: '#49B', fontSize:'.7vw'}}>Finals</button>
                        <button onClick={props.clearCalendarHandler} style={{marginLeft:'10vw', position:'relative', float:'left', height:'4vh', width:'3vw', marginTop:'-4vh', backgroundColor: '#49B', color: 'lightgrey', borderColor: '#49B', fontSize:'.7vw'}}>CLR</button>
                </div>
    }
    let calendar = null;
        calendar = <div className="transition" style={{width: '78vw', height: calendarHeight, backgroundColor: '#FF'}}>
                        <button onClick={props.displayCalendarHandler} style={{marginLeft:'0vw', position:'relative', float:'left', height:'4vh', width:'5vw', marginTop:'-4vh', backgroundColor: '#49B', color: 'lightgrey', borderColor: '#49B', fontSize:'.7vw'}}>Calendar</button>
                        {button}
                        <WeekCalendar numberOfDays={5} firstDay={moment('20180514')} dayFormat={'dddd'} startTime={moment({h:8, m:0})} endTime={moment({h:23, m:50})} scaleUnit={20} cellHeight={15} selectedIntervals={selectedIntervals} onEventClick={props.deleteIntervalHandler} useModal={false}/>        
                    </div>
                    
    return calendar;   

}

export default Calendar;




