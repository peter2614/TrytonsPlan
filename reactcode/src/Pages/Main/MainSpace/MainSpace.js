import React, {Component} from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';

class MainSpace extends Component {
    //render <CourseInformation />
    render() {
        return (
            <div> 
                
                <ScheduleCards />
            </div>
        )
    }
}

export default MainSpace;