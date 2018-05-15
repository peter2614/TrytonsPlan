import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Main/MainPage.js';
import Login from './Main/Components/Login'

class App extends Component {
  render() {
    return (
        
      
        
        /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */
      <div className = 'App'>
        <Login />
      </div>
    );
  }
}

export default App;
