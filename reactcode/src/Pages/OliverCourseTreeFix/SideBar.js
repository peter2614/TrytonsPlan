import React from 'react';
import CourseInfo from './CourseInfo.js';
import './Tree.css';

const Sidebar = (props) => {
    var information = null;
    if(props.course == null) {
        information =
            <div
                style = {{
                    height: "65%",
                    width: "100%",
                    paddingLeft: "0px",
                }}
            >
                <h3
                    style = {{
                        paddingTop: "200px",
                        color: "#dddddd",
                        fontFamily: "Avenir"
                    }}
                >
                    Click on a node to see the information.
                </h3>
            </div>
    } else {
        information =
            <CourseInfo
                id = {props.course.courseID}
                title = {props.course.title}
                units = {props.course.units}
                description = {props.course.description}
                professors = {props.course.professors}
            />;
    }

    return(
        <div className = "SideBar"
             height = "700"
             style={{
                 float: 'left',
             }}
        >
            <button
                id="tree-CSS2"
                style={{
                    position:"absolute",
                    left: "15px",
                    top: "15px",
                    height: '3vh', width: '3vh',
                    backgroundColor: '#997f44',
                    borderColor: '#c0a152',
                    marginLeft: '1vw',
                }}
                onClick={props.handleButton}
            />

            <div className = "Logo" style={{marginTop: '1.5vh'}}>
                <p
                    style={{
                        float: 'left',
                        paddingLeft: "80px",
                        color: '#5186ae',
                        fontWeight: '900',
                        fontFamily: 'Avenir'
                    }}
                >
                    Trytons
                </p>

                <p
                    style={{
                        float: 'left',
                        paddingLeft: '0px',
                        color: '#dacb94',
                        fontWeight: '900',
                        fontFamily: 'Avenir'
                    }}
                >
                    Plan
                </p>
            </div>

            {information}

            <svg
                height = "150" width = "400">
                <circle
                    r = "16" transform = "translate(50,40)"
                    fill = "#00E6C0"/>

                <circle
                    r = "16" transform = "translate(50,80)"
                    fill = "#E082EE"/>
                <circle
                    r = "16" transform = "translate(60,80)"
                    fill = "#FFC0CB"/>
                <circle
                    r = "16" transform = "translate(70,80)"
                    fill = "#FFA500"/>
                <circle r = "16" transform = "translate(80,80)" fill = "#87CEFA"/>

                <circle
                    r = "16" transform = "translate(50,120)"
                    fill = "#E082EE"
                />
                <circle
                    r = "16" transform = "translate(60,120)"
                    fill = "#FFC0CB"
                />
                <circle
                    r = "16" transform = "translate(70,120)"
                    fill = "#FFA500"
                />
                <circle
                    r = "16" transform = "translate(80,120)"
                    fill = "#87CEFA"
                />
                <circle
                    r = "16" transform = "translate(90,120)"
                    fill = "#FAF0E6"
                />

                <text
                    fontFamily= "Avenir"
                    text-anchor = "middle"
                    y="4"
                    style = {{stroke:"#dddddd"}}
                    fontSize="18"
                    transform = "translate(180, 40)"
                >
                    All (Core)
                </text>

                <text
                    fontFamily= "Avenir"
                    text-anchor = "middle"
                    y="4"
                    style = {{stroke:"#dddddd"}}
                    fontSize="18"
                    transform = "translate(200, 80)"
                >
                    One from each
                </text>

                <text
                    fontFamily= "Avenir"
                    text-anchor = "middle"
                    y="4"
                    style = {{stroke:"#dddddd"}}
                    fontSize="18"
                    transform = "translate(250, 125)"
                >
                    <tspan>Other seven from any 100+</tspan>
                </text>
            </svg>
        </div>
    );
}

export default Sidebar;
