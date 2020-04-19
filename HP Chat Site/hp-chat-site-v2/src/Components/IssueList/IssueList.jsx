import React, { Component } from "react";
import { Form, Dropdown, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

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
        // const options = {this.props.responses.map(res => (

        // ))}

        
        return (
            <Form>
                <Form.Field>
                    <label>Issue</label>
                </Form.Field>
                <Dropdown selection fluid options={testOptions} >
                    <Icon></Icon>
                </Dropdown>
            </Form>
        );
    }
}

export default IssueList;
