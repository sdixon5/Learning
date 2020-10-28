import React, { useContext, useState } from "react";
import { UserContext } from "./../../Context/UserContext";
import { Redirect } from "react-router-dom";
import { Container, Grid, Segment } from "semantic-ui-react";
import "./SignIn.css";
import GoogleButton from "react-google-button";

export default function SignIn() {
  const { login, currentUser } = useContext(UserContext);

  return (
    <div id="wrapper">
      {currentUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <GoogleButton type="dark" onClick={login}>
          Sign In with Google
        </GoogleButton>
      )}
    </div>
  );
}
