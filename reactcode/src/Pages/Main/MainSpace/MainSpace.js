import React from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';
import './MainSpace.css'

const MainSpace = (props) => {

    let display = null;
    //Choose to display a course's information or the generate schedules when "Generate Schedules" is pressed in the options bar
    if(props.displayInfo === false) {
        display = 
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <ScheduleCards scheduleCards={props.scheduleCards}/>
        </div>
    } else {
        if (props.allInfo != null && props.generalInfo != null) { 
            display =   <div className={props.loading?'fadeOut':'fadeIn'} style={{ position: 'relative', backgroundColor: '#333'}}>
                            <div style={{minHeight: '5vh', maxHeight:'10vh', marginTop: '1vh'}}>
                                <p style={{fontSize: '2vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>{props.courseID} - {props.generalInfo.title} ({props.generalInfo.units})</p>
                            </div>
                            <div style={{minHeight: '10vh', maxHeight:'30vh', display: 'flex', marginTop: '1.5vh'}}>
                                <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%', fontSize: '18px'}}>{props.generalInfo.description}</p>  
                            </div>
                            <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                            <CourseInformation key={props.courseID} allInfo={props.allInfo} courseID={props.courseID} generalInfo={props.generalInfo} db={props.db}/>
                        </div> 
        }
    }
    // incase we want to somehow separate description and prereqs
    //<p style={{color: '#F63', marginLeft: '10%', width: '80%'}}>Prerequisites: {Prerequisites} <div/> Corequisites: {Corequisites}</p>

    //Backgrounds that keep the color of the mainspace consistent during loading time when looking up different courses
    let loading = null;
    let background = null;
    if(props.displayInfo === true) {
        background =<div style={{overflow: 'hidden'}}> 
                            <div style={{position: 'absolute', backgroundColor: '#DDD', height: '89vh', width: '77.2vw'}}>
                                <div style={{height: '18vh', backgroundColor: '#333'}}/>
                                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                            </div>
                        </div>
        loading =  <div className={props.loading?'loadingfadeIn':'loadingfadeOut'}style={{position: 'absolute', backgroundColor: '#DDD', height: '89vh', width: '78vw'}}>
                        <div style={{height: '18vh', backgroundColor: '#333'}}>
                            <p style={{fontSize: '3vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>LOADING - Fetching Data</p>
                            <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>The connection seems a bit slow, we'll have your info in one moment!</p>
                        </div>
                        <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                    </div>
    }

    return (
        <div>
                {background}
                {loading}
                {display}
        </div>
    )
}


export default MainSpace;