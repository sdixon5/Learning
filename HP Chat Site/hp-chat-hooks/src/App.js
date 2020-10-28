import React from "react";
import "./App.css";
import { StandardInfoProvider } from "./Context/StandardInfoContext";
import { ResponsesProvider } from "./Context/ResponsesContext";
import { UserProvider } from "./Context/UserContext";
import HPChat from "./Pages/HPChat";
import { Switch, Route } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <StandardInfoProvider>
        <ResponsesProvider>
          <UserProvider>
            <Switch>
              {/* <PrivateRoute exact path="/hpchat" component={HPChat} /> */}
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={SignInPage} />
            </Switch>
          </UserProvider>
        </ResponsesProvider>
      </StandardInfoProvider>
    </div>
  );
}

export default App;
