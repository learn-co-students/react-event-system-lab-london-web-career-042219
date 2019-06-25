// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {
  handleClick = () => console.log("Entering password...");

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleClick} />;
      </div>
    );
  }
}
export default Keypad;
