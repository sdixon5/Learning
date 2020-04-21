import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";

export class Soda extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Soda!</h1>
                </Message>

                <img src="assets/coke.jpg" />
                <Message>
                    <Link exact to="/">
                        Back
                    </Link>
                </Message>
            </div>
        );
    }
}

export default Soda;
