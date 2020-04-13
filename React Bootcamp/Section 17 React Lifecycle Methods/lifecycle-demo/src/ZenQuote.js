import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

export class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false,
    };
  }

  // componentDidMount(){
  //     //load data
  //     axios.get('https://api.github.com/zen').then(response => {
  //         this.setState({
  //             quote: response.data
  //         });
  //     });
  //     //set state with that data
  // }

  componentDidMount() {
    axios
      .get("https://api.github.com/zen")
      .then((response) => {
        setTimeout(
          function () {
            this.setState({ 
              quote: response.data, 
              isLoaded: true
            });
          }.bind(this),
          5000
        );
      })
      .catch((error) => {
        this.setState({
          quote: "Error: Too many requests.",
          isLoaded: true
        });
      });
  }

  componentDidUpdate(){
    console.log('In Component Did Update')
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember ...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader" />
        )}
      </div>
    );
  }
}

export default ZenQuote;
