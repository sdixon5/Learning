import React, { Component } from 'react'
import { choice } from './helpers';
import Coin from './Coin';

export default class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    };
    
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        /*this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            }

            if(newCoin.side === 'heads'){
                newState.nHeads += 1;
            }
            else {
                newState.nTails += 1;
            }

            return (
                newState
            );
        });*/

        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }

    handleClick(){
        this.flipCoin();
    }
    
    render() {
        return (
            <div className='CoinContainer'>
                <h2>Let's flip a coin!</h2>
                {/* <Coin side={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc} /> */}
                {this.state.currCoin && <Coin info={this.state.currCoin} />} {/*instead of passing indvidual, pass in whole object*/}
                <button onClick={ this.handleClick }>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails. </p>
            </div>
        )
    }
}
