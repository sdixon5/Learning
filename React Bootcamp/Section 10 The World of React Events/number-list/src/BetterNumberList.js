import React, { Component } from 'react'
import BetterNumberItem from './BetterNumberItem';

export class BetterNumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 3, 4, 5]
        };
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    }
    
    render() {
        let nums = this.state.nums.map(n => (
            <BetterNumberItem value={n} remove={this.remove} />
        ));
        return (
            <div>
                <h1>Better Number List</h1>
                <ul>{nums}</ul>    
            </div>
        )
    }
}

export default BetterNumberList
