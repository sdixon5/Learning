import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";

export class Candy extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Candy!</h1>
                </Message>

                <img src="assets/reeses.jpg" />
                <Message>
                    <Link exact to="/">
                        Back
                    </Link>
                </Message>
            </div>
        );
    }
}

export default Candy;
