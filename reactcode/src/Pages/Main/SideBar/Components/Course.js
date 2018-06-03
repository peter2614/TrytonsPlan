import React from 'react';
import './Course.css'


const course = (props) => {
 
    //Styles
    const textStyle = {
        textAlign: 'left',
        margin: '0px',
        color: 'lightgrey',
        fontSize: '120%',
        paddingLeft: '1%', 
    }
   
    //Button + and - sign formatting
    let text = null;
    if (props.text === "+") {
        text = <div style={{fontSize: '20px', fontWeight: '700', backgroundColor: ''}}>+</div>;
    } else {
        text = <div style={{fontSize: '20px', fontWeight: '900', backgroundColor: ''}}>−</div>;
    }
    
    let name = <p style={{textAlign: 'left', margin: '0px', color: 'lightgrey', fontSize: '120%', fontWeight: '650'}}>
                    {props.name}
                </p>

    //Course Name Color Coding
    if(props.name.includes("PHYS")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#99C', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
    if(props.name.includes("MATH")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#9C9', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
    if(props.name.includes("CSE")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#C77', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
    if(props.name.includes("COGS")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#C7A', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
    if(props.name.includes("CHEM")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#7C7', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }
    if(props.name.includes("BILD")) {
        name = <p style={{textAlign: 'left', margin: '0px', color: '#7CC', fontSize: '120%', fontWeight: '650'}}>{props.name}</p>
    }




    //RETURN
    return (
        <div className={"courseHover"} style={{width: '100%', minHeight:'4vh', display: 'flex', alignItems: 'center', backgroundColor: ''}}>
            <div style={{paddingLeft: '1%', width: '25%', display: 'flex', backgroundColor: '', float: 'left', cursor: 'pointer', minHeight: '4vh', alignItems: 'center'}} onClick={props.displayCourseInfoHandler}>
                {name} 
            </div>
            <div style={{width: '63%', backgroundColor: '', float: 'left', cursor: 'pointer', minHeight: '4vh', display: 'flex', alignItems: 'center'}} onClick={props.displayCourseInfoHandler}>
                <p style={textStyle}>
                    ({props.units}) {props.description}
                </p>
            
            </div>
            <span style={{width:'12%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: ''}}>
            <button style={{width: '30px', height: '30px'}}
            
            onClick={props.courseHandler}>{text}</button>
            </span>
        </div>
    )
}


export default course;