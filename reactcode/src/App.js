import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/Main/MainPage';
import firebase from 'firebase';
import CourseTree from './Pages/OliverCourseTree/CourseTree';

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
    displayCourseTree: false
  }

  displayCourseTreeHandler = () => {
    this.setState({displayCourseTree: !this.state.displayCourseTree});
  }



  render() {
    let heightOfMainSpace = '100vh';
    let heightOfCourseTree = '0vh'
    if (this.state.displayCourseTree == true) {
      heightOfMainSpace = '0vh';
      heightOfCourseTree = '100vh'
    }
    return (
      <div className="App" style={{height: '100vh', width:'100vw', overflow:'hidden'}}>
        <div style={{height: heightOfMainSpace, width: '100vw', marginTop: '0vhh', overflow: 'hidden'}}>
          <MainPage db={firebase} displayCourseTreeHandler={this.displayCourseTreeHandler}/>
        </div>
        <div style={{height: heightOfCourseTree, width: '100vw', marginTop: '0vh', overflow: 'hidden'}}>
          <CourseTree Database={firebase} displayCourseTreeHandler={this.displayCourseTreeHandler} display={this.state.displayCourseTree}/>
        </div>

        
      </div>
    );
  }
}

export default App;
