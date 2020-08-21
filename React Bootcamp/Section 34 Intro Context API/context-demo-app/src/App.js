import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { PageContent } from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
