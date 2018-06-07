import React from 'react';

const Edge = (props) => {
    return(
        <g>
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    markerUnits="strokeWidth"
                    refX="6" refY="3"
                    orient="auto"
                >
                    <path
                        d="M0,1 L0,5 L6,3 z"
                        fill={props.color}
                    />
                </marker>
            </defs>

            <line 
                x1={props.x1} y1={props.y1}
                x2={props.x2} y2={props.y2} 
                stroke={props.color} stroke-width="2" 
                opacity={props.opacity}
                marker-end="url(#arrow)" 
            />
        </g>
    );
}

export default Edge;