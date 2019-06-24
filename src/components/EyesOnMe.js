import React, { Component } from "react";

export default class EyesOnMe extends Component {
  focusClick = () => console.log("Good!");
  blurClick = () => console.log("Hey! Eyes on me!");
  render() {
    return (
      <div>
        <button onFocus={this.focusClick} onBlur={this.blurClick}>
          Eyes on me, please!
        </button>
      </div>
    );
  }
}
