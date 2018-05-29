import React, {Component} from 'react';
import ScheduleCards from './Components/ScheduleCards.js';
import CourseInformation from './Components/CourseInformation';
import './MainSpace.css'

class MainSpace extends Component {


    render() {
        let display = null;
        let Prerequisites = "None"
        let Corequisites = "None"
        if(this.props.displayInfo === false) {
            display = 
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <ScheduleCards scheduleCards={this.props.scheduleCards}/>
            </div>
        } else {
            if (this.props.allInfo != null && this.props.generalInfo != null) { 
                display = <div className={this.props.loading?'fadeOut':'fadeIn'} style={{ position: 'relative', backgroundColor: '#333'}}>
                <div style={{minHeight: '5vh', maxHeight:'10vh'}}>
                    <p style={{fontSize: '2vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>{this.props.courseID} - {this.props.generalInfo.title} ({this.props.generalInfo.units})</p>
                </div>
                <div style={{minHeight: '10vh', maxHeight:'30vh', display: 'flex', alignItems: 'center'}}>
                    <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>{this.props.generalInfo.description}</p>  
                </div>
                <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
                    <CourseInformation key={this.props.courseID} allInfo={this.props.allInfo} courseID={this.props.courseID} generalInfo={this.props.generalInfo} db={this.props.db}/>
                </div> 

        }
    }
    //<p style={{color: '#F63', marginLeft: '10%', width: '80%'}}>Prerequisites: {Prerequisites} <div/> Corequisites: {Corequisites}</p>
    let background = <div style={{overflow: 'hidden'}}> 
    <div style={{position: 'absolute', backgroundColor: '#DDD', height: '89vh', width: '77.2vw'}}>
    <div style={{height: '16vh', backgroundColor: '#333'}}></div>
    <hr style={{paddingTop: '.5vh', marginLeft: '0%', width: '100%'}}/>
    </div></div>
    let loading = null;
    loading = <div className={this.props.loading?'loadingfadeIn':'loadingfadeOut'}style={{position: 'absolute', backgroundColor: '#DDD', height: '89vh', width: '78vw'}}>
        <div style={{height: '16vh', backgroundColor: '#333'}}>
        <p style={{fontSize: '3vw', fontWeight: '700', margin: '0px', color: 'lightgrey'}}>LOADING - Fetching Data</p>
            <p style={{color: 'lightgrey', marginLeft: '10%', width: '80%'}}>The connection seems a bit slow, we'll have your info in one moment!</p></div>
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
    
                    {background}
                    {loading}
                    {display}
    
            </div>
        )
    }
}

export default MainSpace;