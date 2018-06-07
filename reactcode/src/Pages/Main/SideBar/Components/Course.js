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
    }

    //Button + and - sign formatting
    let text = null;
    if (props.text === "+") {
        text = <div style={{fontSize: '20px', fontWeight: '500',  color: '#9a9a9a', backgroundColor: 'transparent'}}>
            <div className="listHandler">+</div>
        </div>;
    } else {
        text = <div style={{fontSize: '30px', fontWeight: '400',  color: '#9a9a9a', backgroundColor: 'transparent'}}>
            <div className="listHandler">-</div>
        </div>;
    }

    let name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#9a9a9a', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>
        {props.name}
    </p>;

    //Course Name Color Coding
    if(props.name.includes("BIBC")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#997f44', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("BICD")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#b4ac3e', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("BIEB")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#7d8d39', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("BILD")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#5d902f', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("BIMM")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#2c992c', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("BIPN")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#37a97a', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("CHEM")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#1c7768', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("COGS")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#22889d', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("CSE")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#356a7f', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("MATH")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#1777bc', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("PHYS")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#1a4db7', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }





    //RETURN
    return <div className={"courseHover"}
                style={{width: '100%', minHeight: '4vh', display: 'flex', alignItems: 'center', borderWidth: '0.2px',
                    backgroundColor: '',}}>
        <div style={{
            fontFamily: 'Avenir',
            fontSize: '110%',
            width: '20%',
            display: 'flex',
            backgroundColor: '',
            float: 'left',
            cursor: 'pointer',
            minHeight: '4vh',
            alignItems: 'center'
        }} onClick={props.displayCourseInfoHandler}>
            {name}
        </div>
        <div style={{
            width: '63%',
            marginLeft: '1vw',
            backgroundColor: '',
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
            backgroundColor: ''
        }}>
            <div onClick={props.courseHandler}>{text} </div>
        </div>
    </div>
}


export default course;