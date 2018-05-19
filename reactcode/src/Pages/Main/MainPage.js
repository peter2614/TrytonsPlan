import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Image, Button, Navbar } from 'react-bootstrap';
import SideBar from './SideBar/SideBar.js'
import NavBar from './NavBar/Navbar.js'
import MainSpace from './MainSpace/MainSpace.js'
import './MainPage.css';

class MainPage extends Component {
  
    render() {


    return (
        <div >
            <NavBar className="navBar"/>
            <div>
                <SideBar/>      
            </div>
            <div>
                <MainSpace />
            </div>
        </div>
        
    );
  }
}

export default MainPage;
