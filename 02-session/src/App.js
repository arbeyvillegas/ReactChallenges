import React, { Component } from 'react';
import logo from './logo.svg';
import demomenu from './demo-menu.png';
import './App.css';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Session 2 : Introduction to React.js</h1>
        </header>
        <p className="App-intro">
          <code>Build a menu as the following example </code>
        </p>
        <div>
        <img src={demomenu}  alt="logo" />
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
