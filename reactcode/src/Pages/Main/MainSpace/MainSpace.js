import React from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';
import './MainSpace.css'
import logo from '../../../Assets/TrytonsPlanLogo.png';
import {Modal} from 'react-bootstrap';

const MainSpace = (props) => {

    let display = null;
    //Choose to display a course's information or the generate schedules when "Generate Schedules" is pressed in the options bar
    if(props.displayInfo === false) {
        if(props.scheduleLoading === true) {
            //loading splash for Generate Schedules
            display = <div className="scheduleFadeIn">
                <div style={{height: '25vh', backgroundColor: '#424242'}}/>
                <div style={{height: '25vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="loader" style={{height: '20vh', width: '20vh'}}/>
                </div>
                <div style={{height: '5vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={{color:'#dddddd', fontSize: '3vw'}}>Generating Schedules...</p>
                </div>
                <div style={{height: '39vh', backgroundColor: '#424242'}}/>
            </div>
        } else {
            //Display the Schedule Cards after they finish loading
            if(props.schedules.length === 0 && props.schedulesErrorCheck != null && props.schedulesErrorCheck.length != 0) {
                display = <div className="scheduleFadeIn">
                    <div style={{height: '25vh', backgroundColor: '#424242'}}/>
                    <div style={{height: '25vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{color:'#dddddd', fontSize: '3.5vw'}}>NO RESULTS</p>
                    </div>
                    <div style={{height: '5vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{color:'#dddddd', fontSize: '2vw'}}>Your filters might be too strict.</p>
                    </div>
                    <div style={{height: '39vh', backgroundColor: '#424242'}}/>
                </div>
            } else {
                if (props.schedulesErrorCheck != null && props.schedulesErrorCheck.length == 0) {
                    display = <div className="scheduleFadeIn">
                        <div style={{height: '20vh', backgroundColor: '#424242'}}/>
                        <div style={{height: '25vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{color:'#dddddd', fontSize: '5vw'}}>NO POSSIBLE COMBINATIONS</p>
                        </div>
                        <div style={{height: '5vh', backgroundColor: '#424242', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <p style={{color:'#dddddd', fontSize: '3vw'}}>Your classes are all conflicting.</p>
                        </div>
                        <div style={{height: '39vh', backgroundColor: '#424242'}}/>
                    </div>
                } else {
                    //Display schedule cards
                    display =
                        <div className='scheduleFadeIn' style={{display: 'flex', flexWrap: 'wrap'}}>
                            <ScheduleCards
                                displayCalendarHandler={props.displayCalendarHandler}
                                db={props.db}
                                schedules={props.schedules}/>
                        </div>
                }
            }
        }
    } else {
        //Display a course's information
        if (props.allInfo != null && props.generalInfo != null) {
            display =   <div className={props.loading?'fadeOut':'fadeIn'} style={{fontFamily: 'Avenir', position: 'relative', backgroundColor: '#333', marginTop:'-94vh'}}>
                <div style={{minHeight: '5vh', maxHeight:'10vh'}}>
                    <p style={{fontFamily: 'Avenir', fontSize: '2vw', fontWeight: '500', marginTop: '1.5vw', color: 'lightgrey'}}>{props.courseID} - {props.generalInfo.title} ({props.generalInfo.units})</p>
                </div>
                <div style={{fontFamily: 'Avenir', minHeight: '13vh', maxHeight:'30vh', display: 'flex', marginTop: '1.5vh'}}>
                    <p style={{color: '#dddddd', marginLeft: '10%', width: '80%', fontSize: '18px'}}>{props.generalInfo.description}</p>
                </div>
                <hr style={{fontFamily: 'Avenir', paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                <CourseInformation addIntervalHandler={props.addIntervalHandler} key={props.courseID} allInfo={props.allInfo} courseID={props.courseID} generalInfo={props.generalInfo} db={props.db}/>
            </div>
        }
    }

    //Backgrounds that keep the color of the mainspace consistent during loading time when looking up different courses
    let background = null;
    if(props.displayInfo === true) {
        background =<div style={{overflow: 'hidden'}}>
            <div style={{position: 'relative', backgroundColor: '#424242', height: '94vh', width: '78vw'}}>
                <div style={{height: '20vh', backgroundColor: '#333'}}>
                    <p className={props.loading?'loadingfadeIn':'loadingfadeOut'} style={{fontSize: '3vw', fontWeight: '700', margin: '1vh', color: '#424242'}}>LOADING - Fetching Data</p>
                    <p className={props.loading?'loadingfadeIn':'loadingfadeOut'} style={{color: '#424242', margin: '1vh', width: '80%'}}>The connection seems a bit slow, we'll have your info in one moment!</p>
                </div>
                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
            </div>
        </div>
    }



    //What we're actually going to display to the user
    let finalDisplay = <div>

        {background}
        {display}

    </div>

    //switch between splash screen and everything else
    if  (props.displaySplashScreen === true && props.displayInfo === true) {
        finalDisplay = <div style={{backgroundColor: 'transparent', height: '87vh', width: '77vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        </div>
    }

    return (
        <div style={{margin: '1vh', fontFamily: 'Avenir'}}>
            <div className="modal-container" onClick={props.closeModalHandler}>
                <Modal show={props.showModal}>
                    <Modal.Header style={{display: 'flex', justifyContent: 'center'}}>
                        <Modal.Title >Can't Add Another Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{display: 'flex', justifyContent: 'center'}}>
                        <text>You can only add up to 7 courses to your Course List.</text>
                    </Modal.Body>
                </Modal>
            </div>
            {finalDisplay}

        </div>
    )
}


export default MainSpace;