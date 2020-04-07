import React, { Component } from 'react'

export class NumberItem extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.value}
                    <button onClick={this.props.remove}>X</button>
                </li>
            </div>
        )
    }
}

export default NumberItem
