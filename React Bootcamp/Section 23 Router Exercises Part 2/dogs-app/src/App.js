import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import DogList from "./Components/Dog-List/DogList";
import DogDetails from "./Components/Dog-Details/DogDetails";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./Components/Routes/Routes";

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: whiskey,
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!",
                ],
            },
            {
                name: "Hazel",
                age: 3,
                src: hazel,
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs.",
                ],
            },
            {
                name: "Tubby",
                age: 4,
                src: tubby,
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food.",
                ],
            },
        ],
    };

    render() {
        return (
            <div>
                <Navbar dogs={this.props.dogs} />
                <div className="container">
                    <Routes dogs={this.props.dogs} />
                </div>
            </div>
        );
    }
}

export default App;
