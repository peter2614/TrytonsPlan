import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import MainPage from '../MainPage';
import { Button, form, FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';





////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

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


class Login extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            pass: '',
        redirectToReferrer: false
        };
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {

        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <MainPage db={this.props.db}/>;
        }
        return (
            <div>
                <form>
                    <FormGroup
                        controlId='inputlogin'
                    >
                        <ControlLabel>Working example with validation</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter UCSD Email"
                            onChange={e => this.setState({email: e.target.value})}
                        />
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter UCSD Password"
                            onChange={e => this.setState({pass: e.target.value})}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on UCSD Login.</HelpBlock>
                    </FormGroup>
                </form>
                <Button bsStyle='primary' bsSize='large' onClick={this.login}>Log in</Button>
            </div>
        );
    }
}

export default Login;