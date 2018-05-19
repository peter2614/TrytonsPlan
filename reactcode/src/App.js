import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Main/MainPage.js';
import Login from './Main/Components/Login'
import firebase from 'firebase';


class App extends Component {

  constructor(props){
    super(props);

      var config = {
          apiKey: "AIzaSyDHND3EVIe-S8r0k_3DLf_GClaM2qazGMI",
          authDomain: "trytonsplan.firebaseapp.com",
          databaseURL: "https://trytonsplan.firebaseio.com",
          projectId: "trytonsplan",
          storageBucket: "trytonsplan.appspot.com",
          messagingSenderId: "242589223564"
      };
      firebase.initializeApp(config);

  }
  render() {
    return (
      <div className = 'App'>
        <Login db={firebase}/>
      </div>
    );
  }
}

export default App;
