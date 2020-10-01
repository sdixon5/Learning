import React, { useState, useEffect, useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import SectionList from "../SectionList/SectionList";
import IssueList from "./../IssueList/IssueList";
import "./Main.css";
import UserForm from "../UserForm/UserForm";
import { StandardInfoContext } from "./../../Context/StandardInfoContext";
import { UserContext } from "./../../Context/UserContext";

export default function Main() {
  const standardInfoContext = useContext(StandardInfoContext);
  const userContext = useContext(UserContext);

  const [sections, setSections] = useState(standardInfoContext.standardInfo);

  const companyInfo = `Company name (if any): Weld County School District 6<br/>Full Name: ${userContext.name}<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: ${userContext.phone}<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: ${userContext.email}<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`;

  const updateSections = (response) => {
    if (response === "") {
      let oldSections = [...sections];
      oldSections.pop();
      setSections([...oldSections]);
    } else if (sections.length > standardInfoContext.standardInfo.length) {
      let oldSections = [...sections];
      oldSections.pop();
      setSections([...oldSections, response]);
    } else {
      setSections([...sections, response]);
    }
  };

  useEffect(() => {
    let oldSections = [...sections];
    let section = { ...oldSections[0] };
    section.response[0] = companyInfo;
    oldSections[0] = section;
    setSections([...oldSections]);

    let oldStandardInfo = [...standardInfoContext.standardInfo];
    let contactInfo = { ...oldStandardInfo[0] };
    contactInfo.response[0] = companyInfo;
    oldStandardInfo[0] = contactInfo;
    standardInfoContext.setStandardInfo([...oldStandardInfo]);
  }, [userContext.name, userContext.phone, userContext.email]);

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
          <IssueList updateSections={updateSections} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
