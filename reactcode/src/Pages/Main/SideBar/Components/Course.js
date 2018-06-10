import React from 'react';
import './Course.css'


const course = (props) => {

    //Styles
    const textStyle = {
        fontFamily: 'Avenir',
        textAlign: 'left',
        marginTop: '0.75vw',
        marginLeft: '0.3vw',
        color: '#d6d6d6',
        fontSize: '115%'
    }

    //Button + and - sign formatting
    let text = null;
    if (props.text === "+") {
        text = <div style={{fontSize: '30px', fontWeight: '500',  color: '#d6d6d6', backgroundColor: 'transparent'}}>
            <div className="listHandler">+</div>
        </div>;
    } else {
        text = <div style={{fontSize: '40px', fontWeight: '300',  color: '#d6d6d6', backgroundColor: 'transparent'}}>
            <div className="listHandler">-</div>
        </div>;
    }

    let name = <p style={{textAlign: 'left', margin: '0.6vw', marginLeft: '1vw', color: '#997f44', fontSize: '128%', fontWeight: '525', backgroundColor: 'transparent', opacity: 0.95}}>
        {props.name}
    </p>;

    /*

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
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#34caea', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("CSE")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#54abcb', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("MATH")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#1777bc', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
    if(props.name.includes("PHYS")) {
        name = <p style={{textAlign: 'left', margin: '0.75vw', color: '#1a4db7', fontSize: '120%', fontWeight: '525', backgroundColor: 'transparent'}}>{props.name}</p>
    }
*/




    //RETURN
    return <div className={"courseHover"}
                style={{width: '100%', minHeight: '4vh', display: 'flex', alignItems: 'center', borderWidth: '0.2px',
                    backgroundColor: '',}}>
        <div style={{
            fontFamily: 'Avenir',
            fontSize: '120%',
            width: '20%',
            display: 'flex',
            backgroundColor: '',
            float: 'left',
            cursor: 'pointer',
            minHeight: '4vh',
            alignItems: 'center',
            opacity: 0.95,
        }} onClick={props.displayCourseInfoHandler}>
            {name}
        </div>
        <div style={{
            width: '63%',
            fontSize: '115%',
            marginLeft: '1vw',
            backgroundColor: '',
            float: 'left',
            cursor: 'pointer',
            minHeight: '4vh',
            display: 'flex',
            alignItems: 'center',
            opacity: 0.95,
        }} onClick={props.displayCourseInfoHandler}>
            <p style={textStyle}>
                {props.description} ({props.units})
            </p>

        </div>
        <div style={{
            width: '12%',
            marginRight: '1vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '',
            opacity: 0.95,
        }}>
            <div onClick={props.courseHandler}>{text} </div>
        </div>
    </div>
}


export default course;