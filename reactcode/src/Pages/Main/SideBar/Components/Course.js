import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

//The course component
class course extends Component {
    state = {
        showSections: false
    }
    
    showSectionsHandler = () => {
        const currentState = this.state.showSections; 
        this.setState({showSections: !currentState});
    }
    
    render() {
        //Styles
        const textStyle = {
            textAlign: 'left',
            margin: '0px',
            color: 'lightgrey',
            fontSize: '1.5vh',
            cursor: 'pointer',
        }
        const buttonStyle = {
            margin: '0px',
            width: '2vw',
            float: 'right',
            height: '3vh',
            padding: '0px',
            fontWeight: '700',
            fontSize: '1.5vh',
        }

        const divStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            height: '2vh',
        }

        const addButtonStyle = {
            fontSize: '3vh',
            marginTop: '-.7vh'
        }
        const removeButtonStyle = {
            fontSize: '4vh',
            marginLeft: '-.1vw',
            marginTop: '-1.7vh'
        }

        let text = null;
        if (this.props.text === "+") {
            text = <p style={addButtonStyle}>+</p>
        } else {
            text = <p style={removeButtonStyle}>-</p>
        }
    //RETURN
        return (
            <div style={divStyle} >
            <p style={textStyle} 
                onClick={this.props.displayCourseInfoHandler}>
                {this.props.name} - {this.props.description} 
            </p>
            <button
             style={buttonStyle} 
             onClick={this.props.courseHandler}>{text}</button>
            </div>
        )
    }
}

export default course;