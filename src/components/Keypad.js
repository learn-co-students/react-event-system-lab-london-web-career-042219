import React, { Component } from "react";

class Keypad extends Component {
  handlerKeyUp = e => {
    console.log("Entering password...");
  };

  render() {
    return <input type="password" onKeyUp={this.handlerKeyUp} />;
  }
}

export default Keypad;
