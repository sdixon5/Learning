import React, { Component } from "react";

export class Meal extends Component {
    render() {
        const food = this.props.match.params.foodName;
        const drink = this.props.match.params.drinkName;
        const foodUrl = `https://source.unsplash.com/1600x900/?${food}`;
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drink}`;
        return (
            <div>
                <h1>This is a Meal of: </h1>
                <h2>{food} + {drink}</h2>
                <img src={foodUrl} />
                <img src={drinkUrl} />
            </div>
        );
    }
}

export default Meal;
