import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { StandardInfoProvider } from "./Context/StandardInfoContext";
import { ResponsesProvider } from "./Context/ResponsesContext";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <StandardInfoProvider>
        <ResponsesProvider>
          <UserProvider>
            <Main />
          </UserProvider>
        </ResponsesProvider>
      </StandardInfoProvider>
    </div>
  );
}

export default App;
