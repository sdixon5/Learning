import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          onClick={function() {
            alert("Clicked");
          }}
        >
          Click Me!
        </button>
      </div>
    );
  }
}

export default Button;
