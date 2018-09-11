import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ColorContainer(props) {
  return <div className={props.className}>container...</div>
}

class ColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="color-picker">
        <div className="button-container">
          <button className="color-blue"></button>
          <button className="color-green"></button>
          <button className="color-red"></button>
          <button className="color-yellow" onClick={() => this.setState()}></button>          
        </div>
        ...
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Color Picker Challange</p>
        </header>
        ...
      </div>
    );
  }
}

export default App;
