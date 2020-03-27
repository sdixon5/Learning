import React, { Component } from 'react'

class Game2 extends Component {
    //alterante syntax, uses class propterties proposal
    state = {
        score: 99,
        gameOver: false
    };

    render() {
        return (
            <div>
                <h1 className="Game2">Your Score Is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game2;
