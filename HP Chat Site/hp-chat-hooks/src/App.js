import React from "react";
import "./App.css";
import { StandardInfoProvider } from "./Context/StandardInfoContext";
import { ResponsesProvider } from "./Context/ResponsesContext";
import { UserProvider } from "./Context/UserContext";
import HPChat from "./Pages/HPChat";

function App() {
  return (
    <div className="App">
      <StandardInfoProvider>
        <ResponsesProvider>
          <UserProvider>
            <HPChat />
          </UserProvider>
        </ResponsesProvider>
      </StandardInfoProvider>
    </div>
  );
}

export default App;
