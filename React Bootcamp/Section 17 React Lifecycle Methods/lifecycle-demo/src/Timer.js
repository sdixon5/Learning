import React, { Component } from "react";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      time: new Date(),
    };
    console.log("In Constructor");
  }

  componentDidMount() {
    console.log("In Component Did Mount");
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  render() {
    console.log("In Render");
    return (
      <div>
        <h1>Timer</h1>
        <p>{this.state.time.getSeconds()}</p>
      </div>
    );
  }
}

export default Timer;
