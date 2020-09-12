import React from "react";
import { Form } from "semantic-ui-react";

export default function UserForm({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
}) {
  return (
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
  );
}
