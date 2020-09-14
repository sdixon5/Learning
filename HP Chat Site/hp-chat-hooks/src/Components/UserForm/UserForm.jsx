import React, { useState } from "react";
import { Accordion, AccordionPanel, Form, Icon } from "semantic-ui-react";

export default function UserForm({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
}) {
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
            <input placeholder="Name" value={name} onChange={setName} />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input placeholder="Phone" value={phone} onChange={setPhone} />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" value={email} onChange={setEmail} />
          </Form.Field>
        </Form>
      </Accordion.Content>
    </Accordion>
  );
}
