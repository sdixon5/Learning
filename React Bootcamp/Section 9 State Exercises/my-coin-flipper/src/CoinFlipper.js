import React, { Component } from 'react'
import Coin from './Coin';

export default class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numFlips: 0,
            heads: 0,
            tails: 0,
            isHeads: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    flipCoin(){
        let choice = Math.round(Math.random());
        console.log(choice);
        if(choice === 1){
            this.setState(currentState => ({
                heads: this.state.heads + 1,
                isHeads: true,
                numFlips: this.state.numFlips + 1
            }));
        }
        else {
            this.setState(currentState => ({
                tails: this.state.tails + 1,
                isHeads: false,
                numFlips: this.state.numFlips + 1
            }));
        }

        // this.setState(currentState => ({
        //     isHeads: false
        // }));
    }

    handleClick(){
        this.flipCoin();
    }

    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin isHeads={this.state.isHeads}/>
                <button onClick={ this.handleClick }>Flip Me</button>
                <p>Out of { this.state.numFlips }, there have been { this.state.heads } heads and { this.state.tails } tails. </p>
            </div>
        )
    }
}


for(let i = 0; i < 10; i++){
    let choice = Math.round(Math.random());
    console.log(choice);
}