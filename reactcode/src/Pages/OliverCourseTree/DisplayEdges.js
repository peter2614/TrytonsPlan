import React from 'react';
import Edge from './Edge.js';

const DisplayEdges = (props) => props.edges.map((edge) => {
    // set the opacity
    var opacity = edge.fade ? "0.1" : "1";
    return(
        <Edge
            x1={edge.xStart} y1={edge.yStart}       // startint point
            x2={edge.xEnd} y2={edge.yEnd}           // ending point
            color={edge.color}
            opacity = {opacity}
        />
    );
});

export default DisplayEdges;