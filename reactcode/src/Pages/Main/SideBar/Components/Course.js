import React, {Component} from 'react';
import './Course.css'


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
            fontSize: '120%',
            paddingLeft: '1%', 
        }
        const buttonStyle = {
            margin: '.4vh',
            width: '1.5vw',
            height: '3vh',
            fontWeight: '700',
            fontSize: '1.5vh',
            float: 'right',
        }

        const divStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            backgroundColor: '#444'
        }

        const addButtonStyle = {
            width: '0vw',
            fontSize: '3vh',
            marginTop: '-.8vh',
            marginLeft: '-.12vw',
            height: '2vh',
        }
        const removeButtonStyle = {
            width: '0vw',
            fontSize: '4vh',
            marginLeft: '-.07vw',
            marginTop: '-1.7vh'
        }

        let text = null;
        if (this.props.text === "+") {
            text = <p style={addButtonStyle}>+</p>
        } else {
            text = <p style={removeButtonStyle}>-</p>
        }
        let name = <p style={{textAlign: 'left', margin: '0px', color: 'lightgrey', fontSize: '120%', fontWeight: '650'}}>
                        {this.props.name}
                    </p>
        if(this.props.name.includes("PHYS")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#99C', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }
        if(this.props.name.includes("MATH")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#9C9', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }
        if(this.props.name.includes("CSE")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#C77', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }
        if(this.props.name.includes("COGS")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#C7A', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }
        if(this.props.name.includes("CHEM")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#7C7', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }
        if(this.props.name.includes("BILD")) {
            name = <p style={{textAlign: 'left', margin: '0px', color: '#7CC', fontSize: '120%', fontWeight: '650'}}>{this.props.name}</p>
        }




    //RETURN
        return (
            <div className={"courseHover"} style={{width: '100%', minHeight:'4vh', display: 'flex', alignItems: 'center', backgroundColor: ''}}>
                <div style={{paddingLeft: '1%', width: '25%', display: 'flex', backgroundColor: '', float: 'left', cursor: 'pointer', minHeight: '4vh', alignItems: 'center'}} onClick={this.props.displayCourseInfoHandler}>
                    {name} 
                </div>
                <div style={{width: '60%', backgroundColor: '', float: 'left', cursor: 'pointer', minHeight: '4vh', display: 'flex', alignItems: 'center'}} onClick={this.props.displayCourseInfoHandler}>
                    <p style={textStyle}>
                     ({this.props.units}) {this.props.description}
                    </p>
                
                </div>
                <span style={{width: '15%', float: 'right', backgroundColor: ''}}>
                <button
                style={buttonStyle} 
                onClick={this.props.courseHandler}>{text}</button>
                </span>
            </div>
        )
    }
}

export default course;