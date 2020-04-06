import React, { Component } from 'react'

export default class AnnoyingForm extends Component {
    handleKeyUp(event){
        //alert('You pressed something');
        if(event.keyCode === 56){
            alert('**************** I love the * character *************');
        }
        else {
            alert('Boo');
        }
    }
    
    render() {
        return (
            <div>
                <h3>Try Typing In Here:</h3>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
