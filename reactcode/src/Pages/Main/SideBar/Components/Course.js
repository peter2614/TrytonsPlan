import React from 'react';
import './Course.css'


const course = (props) => {
 
    //Styles
    const textStyle = {
        fontFamily: 'Avenir',
        textAlign: 'left',
        marginTop: '0.75vw',
        marginLeft: '0.3vw',
        color: '#9a9a9a',
        fontSize: '115%'
    };
   
    //Button + and - sign formatting
    let text = null;
    if (props.text === "+") {
        text = <div style={{fontSize: '20px', fontWeight: '500', color: '#9a9a9a', backgroundColor: 'transparent'}}>
            <div class="listHandler">+</div>
        </div>;
    } else {
        text = <div style={{fontSize: '30px', fontWeight: '400', color: '#9a9a9a', backgroundColor: 'transparent'}}>
            <div className="listHandler">-</div>
        </div>;
    }
    
    let name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#9a9a9a', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>
                    {props.name}
                </p>;
/*
    //Course Name Color Coding
    if(props.name.includes("PHYS")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#4d7299', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
*/




    //RETURN
    return <div className={"courseHover"} style={{
        width: '100%',
        minHeight: '4vh',
        display: 'flex',
        alignItems: 'center',
        borderWidth: '0.2px',
        backgroundColor: '',
    }}>

        <div style={{
            fontFamily: 'Avenir',
            fontSize: '110%',
            width: '20%',
            display: 'flex',
            float: 'left',
            cursor: 'pointer',
            minHeight: '4vh',
            alignItems: 'center',
        }} onClick={props.displayCourseInfoHandler}>
            {name}
        </div>

        <div style={{
            width: '67%',
            marginLeft: '1vw',
            float: 'left',
            cursor: 'pointer',
            minHeight: '4vh',
            display: 'flex',
            alignItems: 'center'
        }} onClick={props.displayCourseInfoHandler}>
            <p style={textStyle}>
                {props.description} ({props.units})
            </p>
        </div>

        <div style={{
            width: '12%',
            marginRight: '0.5vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div onClick={props.courseHandler}>{text} </div>
            </div>
    </div>
};


export default course;