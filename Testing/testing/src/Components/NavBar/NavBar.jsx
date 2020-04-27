import React, { Component } from "react";
import './NavBar.css'

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand(){
        this.setState((st) => ({
            expanded: !st.expanded
        }));
    }
    
    render() {
        return (
            <div className="NavBar">
                <a
                    onClick={this.handleExpand}
                    className='NavBar-lines'
                >
                    <i class="fas fa-bars"></i>
                </a>
                {/* <a href="#home" class="active">
                    Logo
                </a> */}
                <div className={`NavBar-${this.state.expanded ? 'expanded' : 'hidden'}`}>
                    <a href='#home'>Home</a>
                    <a href="#user">User Search</a>
                    <a href="#computer">Computer Search</a>
                    <a href="#login">Login <i class='fas fa-sign-in-alt' /></a>
                    <a href='#logout'>Logout <i class="fas fa-sign-out-alt"></i></a>
                </div>
                

                {/* <i class="fa fa-bars"></i> */}
            </div>
        );
    }
}

export default NavBar;
