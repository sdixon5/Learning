import React, { Component } from "react";

export class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    //console.log([evt.target.name]);
    //let name = [evt.target.name][0];
    //console.log(name);
    // if([evt.target.name][0] === 'email'){
    //     console.log('console log: email');
    // }
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input 
            type="email" 
            name='email'
            placeholder="email" 
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name='password'
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;
