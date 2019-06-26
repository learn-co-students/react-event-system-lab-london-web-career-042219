// Code EyesOnMe Component Here

import React, { Component } from "react";

export default class EyesOnMe extends Component {
  onBlurHandler = () => {
    console.log("Hey! Eyes on me!");
  };

  onFocusHandler = () => {
    console.log("Good!");
  };

  render() {
    return <button onFocus={this.onFocusHandler} onBlur={this.onBlurHandler} />;
  }
}
