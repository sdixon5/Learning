import React, { Component } from 'react'

export class BetterNumberItem extends Component {
    handleRemove(evt){
        this.props.remove(this.props.value);
    }
    
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handleRemove}>X</button>
            </li>
        )
    }
}

export default BetterNumberItem
