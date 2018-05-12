import React from 'react';

class CourseSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: ''
        };

    }

    render() {
        return(
            <div className = "container">
            <div className="row">
                <div className="col-md-2">
            <div><input className="CourseSearchBar" placeholder="Search Course" value={this.state.courseName} onChange={this.handleChange.bind(this)}/></div>

                </div>
            </div>
                <div className = "row">
                    <div className="col-md-2">
                        <div><button className="btn btn-lg">Primary</button></div>
                        </div>
                    </div>


            </div>
        );
    }

    handleChange(evt) {
        evt.preventDefault();
        this.handleChangeCourseName(evt);
    }

    handleChangeCourseName (evt) {
        this.setState({courseName: evt.target.value});
        console.log(this.state.courseName);
    }


}

export default CourseSearchBar;