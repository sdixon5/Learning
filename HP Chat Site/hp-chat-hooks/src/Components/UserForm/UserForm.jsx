import React, { useState } from "react";
import { useContext } from "react";
import { Accordion, Form, Icon } from "semantic-ui-react";
import { UserContext } from "./../../Context/UserContext";

export default function UserForm() {
  const userContext = useContext(UserContext);

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? -1 : 0);
  };

  return (
    <Accordion styled>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        User Information
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Name"
              value={userContext.name}
              onChange={userContext.setName}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input
              placeholder="Phone"
              value={userContext.phone}
              onChange={userContext.setPhone}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              value={userContext.email}
              onChange={userContext.setEmail}
            />
          </Form.Field>
        </Form>
      </Accordion.Content>
    </Accordion>
  );
}
