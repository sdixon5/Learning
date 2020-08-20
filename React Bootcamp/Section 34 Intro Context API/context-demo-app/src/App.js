import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Form />
      </>
    );
  }
}

export default App;
