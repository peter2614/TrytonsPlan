import React, {Component} from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';

class MainSpace extends Component {

    render() {
        return (
            <div> 
                <CourseInformation />
            </div>
        )
    }
}

export default MainSpace;