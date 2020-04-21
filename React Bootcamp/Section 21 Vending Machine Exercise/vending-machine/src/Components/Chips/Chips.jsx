import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";

export class Chips extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Chips!</h1>
                </Message>

                <img src="assets/ruffles.jpg" />
                <Message>
                    <Link exact to="/">
                        Back
                    </Link>
                </Message>
            </div>
        );
    }
}

export default Chips;
