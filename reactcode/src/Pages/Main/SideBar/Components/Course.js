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
            color: 'lightgrey'
        }
        const buttonStyle = {
            margin: '0px',
            width: '20px',
            float: 'right',
            height: '18px',
            textAlign: 'center',
            padding: '0px'
        }
        const divStyle = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

        const textSectionStyle = {
            textAlign: 'left',
            margin: '0px',
            color: 'lightgrey',
            fontSize: '12px',

        }
        const buttonSectionStyle = {
            margin: '1px',
            width: '15px',
            float: 'right',
            height: '13px',
            align: 'right',
            textAlign: 'center',
            fontSize: '10px',
            padding: '0px'
        }

        let sectionObjects = null;
    if (this.state.showSections) {
        sectionObjects = (<div>
            {this.props.sections.map((section, index) => {
                return <div style={divStyle}>
                        <p style={textSectionStyle}
                        onClick={this.showSectionsHandler}>
                        {section.days}  {section.time}  {section.professor} {section.building}

                        </p>
                        <Button bsStyle="primary" 
                        style={buttonSectionStyle} 
                        onClick={(event) => {this.props.sectionHandler(event, this.props.name, section.sectionCode)}}>
                        {this.props.text}</Button>
                        </div>
        })}
        </div>
        );
    }
    //RETURN
        return (
            <div>
            <div style={divStyle}>
            <p style={textStyle} 
            onClick={this.showSectionsHandler}>
                {this.props.name} - {this.props.description} 
            </p>
            <Button bsStyle="primary"
             style={buttonStyle} 
             onClick={this.props.courseHandler}>{this.props.text}</Button>
            
            </div>
            {sectionObjects}
            </div>
        )
    }
}

export default course;