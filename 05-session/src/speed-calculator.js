import React from 'react';
import SpeedInput from './speed-input';
import SeepdResult from './speed-result';
import SpeedLimit from './speed-limit';

export default class SpeedCalculator extends React.Component {
  constructor(props) {
    super(props);
    //define the state properties
  }

  handleKmsChange = speed => {
    
  };

  handleMilesChange = speed => {
    
  };

  handleSpeedLimitChange = limit => {
    
  };

  toKilometers(mph) {
    
  }

  toMiles(kph) {
    
  }

  tryConvert(speed, convert) {
    const input = parseFloat(speed);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    // get the speed and measurement

    // Convert mph to kph or viceversa, accordingly
   
    // Render SpeedLimit at least

    // Render SpeedInput (for kph and mph) and SpeedResult only if SpeedLimit has a value set
  }
}
