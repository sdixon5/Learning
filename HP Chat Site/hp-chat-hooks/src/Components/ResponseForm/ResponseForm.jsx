import React, { useState } from "react";
import { Accordion, Form, Icon, TextArea } from "semantic-ui-react";

export default function ResponseForm() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? -1 : 0);
  };

  //pull in response context, then use a reducer to update the data

  return (
    <Accordion styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        Issue Form
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea placeholder="Description" style={{ minHeight: 200 }} />
          </Form.Field>
        </Form>
      </Accordion.Content>
    </Accordion>
  );
}
