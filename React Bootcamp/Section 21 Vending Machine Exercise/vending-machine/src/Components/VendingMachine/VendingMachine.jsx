import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "../Message/Message";

export class VendingMachine extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Vending Machine</h1>
                </Message>

                <Message>
                    <p>What would you like to eat?</p>
                </Message>

                <Message>
                    <Link exact to="/soda">
                        Soda
                    </Link>
                    <Link exact to="/chips">
                        Chips
                    </Link>
                    <Link exact to="/candy">
                        Candy
                    </Link>
                </Message>
            </div>
        );
    }
}

export default VendingMachine;
