import React from 'react';
import ScheduleCard from './ScheduleCard.js';

const schedulecards = (props) => props.schedules.map( (schedule, index) => {
    
        return (
                <ScheduleCard
                key = {index}
                year = {schedule.year}
                quarter = {schedule.quarter}
                units = {schedule.units}
                sections = {schedule.sections}
                GPA = {schedule.GPA}
                profScore = {Math.ceil(schedule.profScore*100)}
                timeCommitment = {schedule.timeCommitment}
                timeUsage = {Math.ceil(schedule.timeUsage*100)}
                scheduleID={schedule.scheduleID+1}
                />            
        )

});


export default schedulecards;