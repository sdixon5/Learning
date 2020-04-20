import React, { Component } from 'react'
import 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import image from '../../logo.svg';

export class ProfileCard extends Component {
    // style={{position: "fixed", marginRight: '1rem', paddingRight: '2rem'}}
    render() {
        return (
            <div >
                <Card 
                image={image}
                header='Tony Stark'
                meta='Iron Man'
                description='Tony Stark is a super smart guy.'
                extra='Super Rich!'/>
            </div>
        )
    }
}

export default ProfileCard
