import React, { Component } from "react";
import "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
import SectionList from "../SectionList/SectionList";
import IssueList from "../IssueList/IssueList";
import 'semantic-ui-css/semantic.min.css';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responses: [
                { key: "Test 1", response: ["Test 1 Response", 'Test Within 1'] },
                { key: "Test 1", response: ["Test 2 Response"] },
                { key: "Test 1", response: ["Test 3 Response"] }
            ]
        };
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Column width={10}>
                        <SectionList responses={this.state.responses} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <IssueList />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Main;
