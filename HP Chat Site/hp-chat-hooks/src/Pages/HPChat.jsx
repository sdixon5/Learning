import React from "react";
import { Container, Grid } from "semantic-ui-react";
import SectionList from "../Components/SectionList/SectionList";
import IssueList from "../Components/IssueList/IssueList";
import "./HPChat.css";
import UserForm from "../Components/UserForm/UserForm";
import useSections from "../Hooks/useSections";
import ResponseForm from "../Components/ResponseForm/ResponseForm";

export default function HPChat() {
  const [sections, updateSections] = useSections();

  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          <h1>HP Chat Responses</h1>
          <SectionList sections={sections} />
        </Grid.Column>
        <Grid.Column width={6}>
          <UserForm />
          <br />
          <ResponseForm />
          <br />
          <IssueList updateSections={updateSections} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
