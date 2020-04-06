import React, { Component } from 'react'
import './Coin.css';

export default class Coin extends Component {
    render() {
        const isHeads = this.props.isHeads;
        let image;
        if(this.props.isHeads) {
            image = <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'></img>
        }
        else {
            image = <img src='http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=5de11ba7b84bfae7c542aaab2202ba2fd2ec46a2-1586193801-0-AXmhf7S03_Tj-59s4zXiBx35-mMyC8IUHJHuPXcTBQujfJQf3BBezjE68bjKZePc4RooincFTKkIKLEWK5ROZpdGkhjc8EJPClnhUiRNyvPo1pXOCSYdTcoo-LOeSUEBIQ1UZGIBZWNcNNs5cwIpSMSwlFufv_-DsL-fGCzoOB7o6DYdYeR18xja-SqNrCLiTO5uU2W4XtwMjCRltqa2zN4gTio6TUCUSggKBe-m6zBQ1PjwWcuapl3HoWLAn1DJMjf85mduGDHbruPX6Rfw0Q7jcJehMWRUYSy7HK-AJl04f2Y2A42OLNEfgQEdsr-dFA'></img>
        }

        return (
            <div className='Coin'>
                {image}
            </div>
        )
    }
}
