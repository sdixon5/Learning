import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css';

export default class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            'purple',
            'magenta',
            'violet',
            'pink',
            'red',
            'black',
            'white',
            'blue',
            'green',
            'orange',
            'darkblue',
            'deepskyblue',
            'tomato',
            'yellow',
            'brown',
            'grey',
            'spring green',
            'slateblue',
            'skyblue',
            'saddlebrown',
            'maroon',
            'pink',
            'lightpink',
            'lime',
            'gold',
            'darkorange'
        ]
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box colors={this.props.allColors}/>
        )
        return (
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}
