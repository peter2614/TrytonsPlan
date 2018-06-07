import React from 'react';
import Professor from './Professor.js';

const CourseInfo = (props) => {
    var profInfo = 
        <Professor
            professors = {props.professors}
        />;
    
    var units = props.units === 0 ? "Varies" : props.units;

    return(
        <div 
            style = {{
                height: "65%",
                width: "95%",
                overflowY: "scroll",
                paddingLeft: "20px",
            }}
        >
            <h4>{props.id}</h4>
            <h4>{props.title}</h4>
            <h5>{"Units: " + units}</h5>
            <p
                style = {{
                    fontSize: "14px"
                }}
                >
                {props.description}
            </p>
            {profInfo}
        </div>
    );
}

export default CourseInfo;