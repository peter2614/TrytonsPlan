import React, {Component} from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';
import './MainSpace.css'

class MainSpace extends Component {


    render() {
        let display = null;

        if(this.props.displayInfo === false) {
            display = 
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ScheduleCards scheduleCards={this.props.scheduleCards}/>
            </div>
        } else {
            if (this.props.allInfo != null) { 
                display = <div className={this.props.loading?'fadeOut':'fadeIn'} style={{ position: 'relative', backgroundColor: '#333'}}>
                <div style={{height: '20vh'}}>
                    <p style={{fontSize: '3vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>{this.props.courseID} - Course Title</p>
                    <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>A nice description of the course. Some of the descriptions are pretty long. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur similique cumque fugiat omnis quisquam ex harum. Quisquam ea velit architecto qui illum esse nesciunt earum nisi in voluptas ratione voluptatum! A nice description of the course. Some of the descriptions are pretty long. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur similique cumque fugiat omnis quisquam ex harum. Quisquam ea velit architecto qui illum esse nesciunt earum nisi in voluptas ratione voluptatum!  </p>
                    
                </div>
                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                    <CourseInformation key={this.props.courseID} allInfo={this.props.allInfo} courseID={this.props.courseID} db={this.props.db}/>
                </div> 

        }
    }

           let loading = <div style={{position: 'absolute', backgroundColor: '#DDD', height: '89vh', width: '78vw'}}>
           <div style={{height: '20vh', backgroundColor: '#333'}}></div>
           <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
               </div>
    
        
       
        
        /*
        if(this.props.loading == true) {
            display = <div style={{backgroundColor: '#DDD', height: '89vh'}}>
                <div style={{paddingTop: '1vh', backgroundColor: '#333'}}>
                <p style={{fontSize: '3vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>LOADING - Fetching Data</p>
                <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>The connection seems a bit slow, we'll have your info in one moment!</p>
                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                </div>
                <div className="loader"></div>
        </div>
        }*/
        return (
            <div> 
                {loading}
                {display}
                
            </div>
        )
    }
}

export default MainSpace;