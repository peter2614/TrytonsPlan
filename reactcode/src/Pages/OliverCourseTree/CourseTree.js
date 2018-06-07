import React, {Component} from 'react';
import Sidebar from './SideBar.js';
import DisplayTree from './DisplayTree.js';
import DisplayEdges from './DisplayEdges.js';
import InfoNode from './InfoNode.js';
import InfoEdge from './InfoEdge.js';

var MAJOR = "CSE";

var counter = 0;
var collection = [];     // the collection of the prerequisites of this course
var edges = [];

var BLACK = "#000000";  // color black
var GREEN = "#7CFC00";  // color green
var RED = "#FF0000";    // color red

class CourseTree extends Component {
    constructor(props) {
        super(props);

        this.dbref = props.Database.database().ref("courseArr/CSE");

        this.state = {
            courses: [],
            edges: [],
            edgeCollection:[],
            hovered:false,
            selectedCourse: null,
        };

        this.dbref.on('value', dataSnapshot => {
            var courses = [];
            dataSnapshot.forEach(childSnapshot => {
                var course = childSnapshot.val();
                courses.push(new InfoNode(course, counter));
                counter++;
            });
            
            courses.forEach(function(course) {
                var profRef = props.Database.database().ref("course/" + course.courseID + "/professor");
                profRef.on("value", profSnapshot => {
                    profSnapshot.forEach(childSnapshot => {
                        course.addProf(childSnapshot.val());
                    });
                });
            });
            this.setState({courses});

            this.createEdges(this.state.courses);
            this.setState({edges});

            console.log(courses);
        });


        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    // this function will create all the edges between the nodes
    createEdges(courses) {
        // loop through all the courses in the list
        courses.forEach(function(course) {
            // loop through the first dimension of the prerequisites
            course.prerequisites.forEach(function(array) {
                //var find = false;
                // loop through each course title in the array
                array.forEach(function(title) {
                    // if the title is in this tree, get the InfoNode
                    if(title.substring(0, 3) === MAJOR) {
                        // loop throught the course list to find the InfoNode
                        courses.forEach(function(parent) {
                            if(parent.courseID === title) {
                                // create the edge and push it to the array of edges
                                edges.push(new InfoEdge(parent.cx, parent.cy, course.cx, course.cy, BLACK, true));

                                parent.addChild(course);
                                course.addParent(parent);

                            }
                        });
                    }
                });
            });
        });
    }

    // handle the situation when mouse hovers on a node
    handleMouseEnter(index) {
        if(this.state.hovered === false) {
            var course = this.state.courses[index];

            this.state.courses.forEach(function(course) {
                course.toggleOff();
            })

            course.children.forEach(function(child) {
                collection.push(new InfoEdge(course.cx, course.cy, child.cx, child.cy, GREEN, false));
                child.toggleChild();
            });
            helpMouseEnter(course);

            this.setState({
                hovered: true,
                edgeCollection: collection,
            });
        }
    }

    handleMouseLeave() {
        if(this.state.hovered === true) {
            this.state.courses.forEach(function(course) {
                course.toggleOn();
            });
            this.setState({
                hovered:false,
                edgeCollection: [],
            });

            collection = [];
        }
    }
 
    handleMouseClick(index) {
        var selectedCourse = this.state.courses[index];
        this.setState({selectedCourse});
    }

    render() {
        var edgeDisplay = null;

        edgeDisplay = 
            <DisplayEdges
                edges = {this.state.edgeCollection}
            />
                
        return(
            <div>
                <div
                    style = {{
                        float: "left",
                        left: "0px", 
                        width: "320px",
                    }}
                >
                <button id="tree-CSS2" style={{position: 'absolute', height: '3vh', width: '3vh', marginLeft: '-7vw', marginTop: '.75vh', backgroundColor: '#49B', borderColor: '#49B'}} onClick={this.props.courseTreeHandler}/>
                    <Sidebar 
                        course = {this.state.selectedCourse}
                    />
                </div>

                <div 
                    style = {{
                        left: "320px"
                    }}
                >
                    <svg
                        height="75vh" width="60vw"
                        transform="translate(-600,0)"
                        style={{position: 'absolute'}}
                    >
                        <DisplayEdges
                            edges={this.state.edges}
                        />
                        
                        {edgeDisplay}

                        <DisplayTree 
                            courses={this.state.courses}
                            handleEnter={this.handleMouseEnter}
                            handleLeave={this.handleMouseLeave}
                            handleClick = {this.handleMouseClick}
                        />
                    </svg>
                </div>
            </div>
        );
    }
}

function helpMouseEnter(course) {
    course.toggleOn();
    course.parents.forEach(function(parent) {
        collection.push(new InfoEdge(parent.cx, parent.cy, course.cx, course.cy, RED, false));
        helpMouseEnter(parent);
    });
}
export default CourseTree;