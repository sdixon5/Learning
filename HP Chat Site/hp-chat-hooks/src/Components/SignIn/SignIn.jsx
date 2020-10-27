import React, { useContext, useState } from "react";
import { UserContext } from "./../../Context/UserContext";
import { Redirect } from "react-router-dom";

export default function SignIn() {
  const { login, currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <Redirect to="/hpchat" />
      ) : (
        <button onClick={login} className="ui button">
          Sign In with Google
        </button>
      )}
    </div>
  );
}
