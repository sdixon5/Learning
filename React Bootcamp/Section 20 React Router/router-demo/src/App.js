import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dog from "./Components/Dog/Dog";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import { Route, Switch, NavLink } from "react-router-dom";


const Hater = () => <h1>I hate dogs</h1>;

function App() {
    return (
        <div className="App">
          <nav className='App-nav'>
            <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
            <NavLink exact activeClassName='active-link' to='/dog/c'>Dog(c)</NavLink>
            <NavLink exact activeClassName='active-link' to='/dog/r'>Dog(r)</NavLink>
            <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
          </nav>
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/dog/c" component={() => <Dog name='Bob' />} />
                <Route exact path="/dog/r" render={() => <Dog name='Max' />} />
                <Route exact path='/dog/hater' component={Hater} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    );
}

export default App;
