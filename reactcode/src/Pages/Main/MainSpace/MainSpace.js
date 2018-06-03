import React from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';
import './MainSpace.css'
import logo from '../../../Assets/TrytonsPlanLogo.png';

const MainSpace = (props) => {
    let display = null;
    console.log(props.schedules);
    //Choose to display a course's information or the generate schedules when "Generate Schedules" is pressed in the options bar
    if(props.displayInfo === false) {
        if(props.scheduleLoading == true) {
            //loading splash for Generate Schedules
            display = <div className="scheduleFadeIn">
                        <div style={{height: '25vh', backgroundColor: '#666'}}/>
                        <div style={{height: '25vh', backgroundColor: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div className="loader" style={{height: '20vh', width: '20vh'}}/>
                        </div>
                        <div style={{height: '5vh', backgroundColor: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{color:'lightgrey', fontSize: '3vw'}}>Generating Schedules...</p>
                        </div>
                        <div style={{height: '34vh', backgroundColor: '#666'}}/>     
                    </div>
        } else {
            //Display the Schedule Cards after they finish loading
            if(props.schedules.length === 0) {
                display = <div className="scheduleFadeIn">
                            <div style={{height: '20vh', backgroundColor: '#666'}}/>
                            <div style={{height: '25vh', backgroundColor: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{color:'lightgrey', fontSize: '5vw'}}>NO RESULTS</p>
                            </div>
                            <div style={{height: '5vh', backgroundColor: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <p style={{color:'lightgrey', fontSize: '3vw'}}>Your filters might be too strict.</p>
                            </div>
                            <div style={{height: '39vh', backgroundColor: '#666'}}/>     
                        </div>
            } else {
            display = 
            <div className='scheduleFadeIn' style={{display: 'flex', flexWrap: 'wrap'}}>
                <ScheduleCards  db={props.db} schedules={props.schedules}/>
            </div>
            }
        }
    } else {
        if (props.allInfo != null && props.generalInfo != null) { 
            display =   <div className={props.loading?'fadeOut':'fadeIn'} style={{position: 'relative', backgroundColor: '#333', marginTop:'-89vh'}}>
                            <div style={{minHeight: '5vh', maxHeight:'10vh'}}>
                                <p style={{fontSize: '2vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>{props.courseID} - {props.generalInfo.title} ({props.generalInfo.units})</p>
                            </div>
                            <div style={{minHeight: '13vh', maxHeight:'30vh', display: 'flex', marginTop: '1.5vh'}}>
                                <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%', fontSize: '18px'}}>{props.generalInfo.description}</p>  
                            </div>
                            <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                            <CourseInformation key={props.courseID} allInfo={props.allInfo} courseID={props.courseID} generalInfo={props.generalInfo} db={props.db}/>
                        </div> 
        }
    }


    //Backgrounds that keep the color of the mainspace consistent during loading time when looking up different courses
    let background = null;
    if(props.displayInfo === true) {
        background =<div style={{overflow: 'hidden'}}> 
                            <div style={{position: 'relative', backgroundColor: '#DDD', height: '89vh', width: '78vw'}}>
                                <div style={{height: '20vh', backgroundColor: '#333'}}>
                                    <p className={props.loading?'loadingfadeIn':'loadingfadeOut'} style={{fontSize: '3vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>LOADING - Fetching Data</p>
                                    <p className={props.loading?'loadingfadeIn':'loadingfadeOut'} style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>The connection seems a bit slow, we'll have your info in one moment!</p>
                                </div>          
                                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                            </div>
                        </div>
    }
    //switch between splash screen and everything else
    let finalDisplay = <div>
                            {background}
                            {display}
                        </div>
    if  (props.displaySplashScreen == true) {
        finalDisplay = <div style={{backgroundColor: '#444', height: '89vh', width: '78vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src={logo}/>
                        </div>
    }

    return (
            finalDisplay
    )
}


export default MainSpace;