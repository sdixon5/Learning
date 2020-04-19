import React, { Component } from "react";
import { Form, Dropdown, Icon } from "semantic-ui-react";

export class IssueList extends Component {
    render() {
        const testOptions = [
            {
                key: "test1",
                value: "test1",
                text: "test1",
            },
            {
                key: "test2",
                value: "test2",
                text: "test2",
            },
        ];
        return (
            <Dropdown selection fluid placeholder="Issue" options={testOptions}>
                <Icon></Icon>
            </Dropdown>
        );
    }
}

export default IssueList;
