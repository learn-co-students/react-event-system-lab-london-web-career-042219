// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  handleFocus = e => {
    console.log("Good!");
  };

  handleBlur = e => {
    console.log("Hey! Eyes on me!");
  };

  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus}>
        Submit
      </button>
    );
  }
}

export default EyesOnMe;
