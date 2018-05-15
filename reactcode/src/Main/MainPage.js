import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Login from './Components/Login'
import CourseSearchBar from './Components/CourseSearchBar'


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


class MainPage extends React.Component {

    state = {
        redirectToReferrer: true
    };

    logout = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: false });
        });
    };

    render(){

        const { redirectToReferrer } = this.state;

        if (!redirectToReferrer) {
            return <Login />;
        }

        return (
            <div>
                <button onClick={this.logout}>Log out</button>
                <h1>Trytonsplan</h1>
                <CourseSearchBar />
            </div>
        );
    }
}

export default MainPage;