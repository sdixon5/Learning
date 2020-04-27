import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
        this.props.history.goBack();
    }
    
    handleLogin(){
        alert('Logged in');
        this.props.history.push('/food/pizza');
    }

    render() {
        return (
            <div className='NavBar'>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(NavBar);
