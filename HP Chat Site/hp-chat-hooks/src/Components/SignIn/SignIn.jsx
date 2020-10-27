import React, { useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { UserContext } from "./../../Context/UserContext";
import { Redirect, useHistory } from "react-router-dom";

export default function SignIn() {
  const { login, currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      login();
      history.push("/hpchat");
    } catch {}

    setLoading(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <button disabled={loading} type="submit" className="ui button">
        Sign In with Google
      </button>
    </Form>
  );
}
