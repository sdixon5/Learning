import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./Components/VendingMachine/VendingMachine";
import Soda from "./Components/Soda/Soda";
import Chips from "./Components/Chips/Chips";
import Candy from "./Components/Candy/Candy";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
          <NavBar></NavBar>
            <Switch>
                <Route exact path="/" render={() => <VendingMachine />} />
                <Route exact path="/soda" render={() => <Soda />} />
                <Route exact path="/chips" render={() => <Chips />} />
                <Route exact path="/candy" render={() => <Candy />} />
            </Switch>
        </div>
    );
}

export default App;
