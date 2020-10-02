import React, { useState, useContext } from "react";
import { Accordion, Button, Form, Icon, TextArea } from "semantic-ui-react";
import useInput from "../../Hooks/useInput";
import { ResponsesContext } from "./../../Context/ResponsesContext";
import { RESPONSES_ACTIONS } from "./../../Reducers/ResponsesReducers";

export default function ResponseForm() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const [title, setTitle, titleReset] = useInput("");
  const [description, setDescription, descriptionReset] = useInput("");

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? -1 : 0);
  };

  const responsesContext = useContext(ResponsesContext);

  const addResponse = (e) => {
    e.preventDefault();
    responsesContext.dispatch({
      type: RESPONSES_ACTIONS.ADD,
      payload: { key: title, response: description },
    });
    titleReset();
    descriptionReset();
  };

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
            <input placeholder="Title" value={title} onChange={setTitle} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea
              placeholder="Description"
              value={description}
              onChange={setDescription}
              style={{ minHeight: 200 }}
            />
          </Form.Field>
          <Button onClick={addResponse}>Add Response</Button>
        </Form>
      </Accordion.Content>
    </Accordion>
  );
}
