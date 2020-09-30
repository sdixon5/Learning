import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { StandardInfoProvider } from "./Context/StandardInfoContext";

function App() {
  return (
    <div className="App">
      <StandardInfoProvider>
        <Main />
      </StandardInfoProvider>
    </div>
  );
}

export default App;
