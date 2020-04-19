import React, { Component } from "react";
import { Item, Segment } from "semantic-ui-react";
import SectionItem from "../SectionItem/SectionItem";

export class SectionList extends Component {
    render() {
        return (
            <Segment clearing>
                <Item.Group divided>
                    {this.props.responses.map(responseObject => (
                        responseObject.response.map(innerResponse => (
                            <SectionItem 
                                response = {innerResponse}
                            />
                        ))
                    ))}
                </Item.Group>
            </Segment>
        );
    }
}

export default SectionList;
