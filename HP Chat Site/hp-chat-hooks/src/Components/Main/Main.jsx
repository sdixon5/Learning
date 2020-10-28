import React, { useContext } from "react";
import { Button, Grid } from "semantic-ui-react";
import { UserContext } from "../../Context/UserContext";

export default function Main() {
  const userContext = useContext(UserContext);

  return (
    <div>
      <Grid style={{ height: "100vh" }}>
        <Grid.Column style={{ paddingLeft: "10%" }} width={12}>
          <h4>Content Coming Soon!</h4>
          <p>Soon this space will have useful content to display.</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button onClick={userContext.logout}>Logout</Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
