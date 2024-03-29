import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../../Context/UserContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
}
