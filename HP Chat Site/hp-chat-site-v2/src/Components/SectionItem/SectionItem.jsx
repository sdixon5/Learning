import React, { Component } from "react";
import "semantic-ui-react";
import { Item, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export class SectionItem extends Component {
    render() {
        return (
            <Item>
                <Item.Content>
                    <p>{this.props.response}</p>
                </Item.Content>
                <Item.Extra>
                    <Button size="tiny" color="blue" floated="right">
                        Copy To Clipboard
                    </Button>
                </Item.Extra>
            </Item>
        );
    }
}

export default SectionItem;
