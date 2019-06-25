// Code EyesOnMe Component Here
import React, {Component } from 'react';

export default class EyesOnMe extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {key:value}
    // }

    onFocusFunc() {
        console.log("Good!")
    }

    onBlurFunc() {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return( <button onFocus={ this.onFocusFunc } onBlur={ this.onBlurFunc }>Press</button> )
    }

}