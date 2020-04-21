import React, { Component } from "react";
import axios from "axios";

const firstHalf_URL =
    "http://ithelpdesk.greeleyschools.org/helpdesk/WebObjects/Helpdesk.woa/ra/Clients/?qualifier=(email%20like%20'";

const lastHalf_URL = "*')&apiKey=3DZxGGKBZxASZYiG8zkI9KsmtkMGzajjcMYaaAcw/";

export class WHD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            email: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async getUser(email) {
        console.log("Getting User");
        let url = `${firstHalf_URL}${email}${lastHalf_URL}`;
        console.log(url);
        let userInfo = await axios.get(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                // "Access-Control-Allow-Methods":
                //     "GET, PUT, POST, DELETE, HEAD, OPTIONS",
                // "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
            withCredentials: true,
            credentials: 'same-origin',
        });
        this.setState({
            user: userInfo,
        });
    }

    handleSubmit(evt, ...email) {
        evt.preventDefault();
        console.log("Handling Submit");
        this.getUser(this.state.email);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                    />
                    <button>Search</button>
                </form>

                <p>{this.state.user}</p>
            </div>
        );
    }
}

export default WHD;
