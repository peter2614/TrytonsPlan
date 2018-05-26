import React from 'react';
import ScheduleCard from './ScheduleCard.js';

const schedulecards = (props) => props.scheduleCards.map( (schedule, index) => {
   
    
        return (
                <ScheduleCard
                schedule={schedule}
                index={index+1}/>
                
        )

});


export default schedulecards;