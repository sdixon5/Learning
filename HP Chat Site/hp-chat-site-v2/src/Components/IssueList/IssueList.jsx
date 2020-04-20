import React, { Component } from "react";
import { Form, Dropdown, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    //why does this work? confusing syntax!
    // handleChange(evt, { value }){
    //     this.setState({ value: value });
    // }

    // componentDidMount(){
    //     const val = this.state.value;
    //     console.log('Val: ' + val);
    // }

    handleChange(event){
        // console.log(event.target.getAttribute('name'));
        // console.log(event.target.getAttribute('value'));
        // console.log(event.currentTarget);
        // console.log(event.target);
        //console.log([event.target.name]: event.target.value);
        let val = this.state.value;
        if(val === ''){
            //inside here we will remove the uneeded selection!
            this.setState({
                value: ''
            });
        }
        else{
            //inside here we will add the needed selection
            this.setState({
                value: event.target.value
            });
        }
        
    }

    handleClear(event){
        console.log('Handle Clear')
    }

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

        const keys = [];
        this.props.responses.map((res) =>
            keys.push({ key: res.key, text: res.key, value: res.key })
        );

        return (
            // <Form>
            //     <Form.Field>
            //         <label>Issue</label>
            //     </Form.Field>
            //     <Dropdown selection fluid options={this.keys} >
            //         <Icon></Icon>
            //     </Dropdown>
            // </Form>
            <Dropdown
                placeholder="Issue"
                fluid={true}
                selection={true}
                clearable={true}
                //value={this.state.value}
                onChange={this.handleChange}
                options={keys}
                // onClose={this.handleClear}
                
            />
        );
    }
}

export default IssueList;
