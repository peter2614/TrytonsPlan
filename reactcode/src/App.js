import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/Main/MainPage';
import firebase from 'firebase';
import CourseTree from './Pages/OliverCourseTree/CourseTree.js';

class App extends Component {
  
  constructor(props) {
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

  state = {
    displayMain: true
  }

  courseTreeHandler = () => {
    this.setState({displayMain: !this.state.displayMain});
  }


  render() {
    var scale = 'scale(1)';
      document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    let display = 
    <div className="App" style={{minHeight: '1rem', minWidth:'1rem', backgroundColor: '#AAA'}}>
    
        <MainPage db={firebase} courseTreeHandler={this.courseTreeHandler}/>
    </div>
    if(this.state.displayMain === false) {
      scale = 'scale(1.25)';
      document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
      display = <div className="App" style={{marginLeft: '9.5vw', marginTop: '10vh', height: '75vh', width: '75vw', overflow: 'hidden'}}>
        <CourseTree Database={firebase} courseTreeHandler={this.courseTreeHandler}/>
      </div>
    } 
    return (
      
        display  
        
      
      
    );
  }
}

export default App;
