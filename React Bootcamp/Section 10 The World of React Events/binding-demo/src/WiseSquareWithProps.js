import React, { Component } from "react";

export default class WiseSquareWithProps extends Component {
    static defaultProps = {
        messages: [
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without educating the heart is no education at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
          ]
    }

    constructor(props) {
      super(props);
      this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }

    dispenseWisdom() {
        let {messages} = this.props; //right here this is undefined
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

  render() {
    return (
      //inline binding
      // <div className="WiseSquare" onMouseEnter={this.dispenseWisdom.bind(this)}>
      //   😃
      // </div>

      //arrow function inline
      // <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>
      //   😃
      // </div>

      //in the constructor - needed to add a constructor
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}
