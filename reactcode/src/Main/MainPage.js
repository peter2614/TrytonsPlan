import React, {Component} from 'react';
import CourseSearchBar from "./Components/CourseSearchBar";


class MainPage extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
            <div><CourseSearchBar/></div>
            </div>
        )

    }



}

export default MainPage;