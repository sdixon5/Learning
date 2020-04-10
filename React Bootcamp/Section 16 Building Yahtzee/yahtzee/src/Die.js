import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 5
  };
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.idx);
  }
  
  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked';
    if (rolling) classes += 'Die-rolling ';
    return (
      <i
        className={classes}
        // style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
        //onClick={() => this.props.handleClick(this.props.idx)} //this avoids need for handleClick function and the constructor, cuz we are binding in line vs in constructor, but does make a new function for each die!
        disabled={disabled}
      >
        {/* {this.props.val} */}
      </i>
    );
  }
}

export default Die;
