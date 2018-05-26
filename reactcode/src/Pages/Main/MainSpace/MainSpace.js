import React, {Component} from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';

class MainSpace extends Component {
    //render <CourseInformation />

    render() {
        let display = null;
        if(this.props.displayInfo === false) {
            display = 
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ScheduleCards scheduleCards={this.props.scheduleCards}/>
            </div>
        } else
            display = <CourseInformation courseInfo={this.props.courseInfo} generalInfo={this.props.generalInfo} />
        return (
            <div> 
                {display}
            </div>
        )
    }
}

export default MainSpace;