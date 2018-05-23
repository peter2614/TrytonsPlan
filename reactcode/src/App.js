import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/Main/MainPage';

class App extends Component {
  
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="App" style={{minHeight: '1rem', minWidth:'1rem', backgroundColor: '#AAA'}}>
        <MainPage/>
      </div>
    );
  }
}

export default App;
