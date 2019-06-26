// Code EyesOnMe Component Here

import React, { Component } from "react";

export default class EyesOnMe extends Component {
  constructor(props) {
    super(props); // Remember to call super() on the first line of the constructor
    //(this is required in React components if we are to use this in the constructor)

    this.state = {
      secondsLeft: props.initialCount
    };
  }

  onFocusFunction = () => {
    console.log("Good!");
  };
  onBlurFunction = () => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    //return <div id="matrix">{this.genMatrix()}</div>;
    return (
      <button onFocus={this.onFocusFunction} onBlur={this.onBlurFunction}>
        I'm an idiot
      </button>
    );
  }
}
