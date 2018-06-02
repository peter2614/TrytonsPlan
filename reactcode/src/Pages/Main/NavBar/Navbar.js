import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class navbar extends Component {

    render() {
        return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    TrytonsPlan
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
        )}

}

export default navbar;