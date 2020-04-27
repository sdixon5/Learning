import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Food from "./Components/Food/Food";
import { Route, Switch } from "react-router-dom";
import Meal from "./Components/Meal/Meal";
import FoodSearch from "./Components/FoodSearch/FoodSearch";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
          <NavBar />
            <Switch>
                <Route
                    exact
                    path="/food/:name"
                    render={(routeProps) => <Food {...routeProps} />}
                />
                <Route
                    exact
                    path="/food/:foodName/drink/:drinkName"
                    component={Meal}
                />
                <Route exact path='/' render={(routeProps) => <FoodSearch {...routeProps}/>}/>
                <Route render={() => <h1>404 Page Not Found</h1>} />
            </Switch>
        </div>
    );
}

export default App;
