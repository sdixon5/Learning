import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt){
        this.setState({
            query: evt.target.value
        });
    }

    handleClick(){
        console.log('saved food to db');
        this.props.history.push(`/food/${this.state.query}`);
    }

    render() {
        return (
            <div>
                <h1>Search Food: </h1>
                <input
                    type="text"
                    placeholder="Food Item"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Link to={`/food/${this.state.query}`}>Find</Link>
                <button onClick={this.handleClick}>Save!</button>
            </div>
        );
    }
}

export default FoodSearch;
