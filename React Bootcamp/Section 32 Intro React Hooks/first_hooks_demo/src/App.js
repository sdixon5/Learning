import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CounterClass } from "./CounterClass";
import CounterHooks from "./CounterHooks";
import Toggler from "./Toggler";
import { SimpleFormClass } from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHook from "./SimpleFormInputHook";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

function App() {
  return (
    <div className="App">
      {/* <CounterClass />
      <CounterHooks />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
      <SimpleFormInputHook /> */}
      {/* <Clicker /> */}
      <SWMovies />
    </div>
  );
}

export default App;
