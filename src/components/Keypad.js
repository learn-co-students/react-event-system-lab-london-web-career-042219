// Code Keypad Component Here
//render an input with the right type.
//On that input, add an event handler that listens for the keyUp event.
//When that event fires, use console.log to print out the text 'Entering password...'.

import React, { Component } from "react";

export default class Keypad extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    return (
      <input
        onKeyUp={() => {
          console.log("Entering password...");
        }}
        type="password"
      />
    );
  }
}
