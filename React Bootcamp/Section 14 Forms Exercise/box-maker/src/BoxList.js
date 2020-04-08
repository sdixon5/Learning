import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.create = this.create.bind(this);
    }
    
    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !==id ) //make a new array based on boxes who's id does not equal the id that was passed in!
        });
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                width={box.width}
                height={box.height}
                color={box.color}
                key={box.id}
                id={box.id}
                removeBox={ () => this.remove(box.id) } //instead of bind this.remove and then using this.remove inside of the {} we can use an arrow function! Then we don't have to bind in the box component, it just works, cuz it knows what this is!
            />
        ));
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.create} />
                {boxes}
            </div>
        );
    }
}

export default BoxList
