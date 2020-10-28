import React, { useState, useContext } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import HPChat from "./HPChat";
import Main from "../Components/Main/Main";
import { UserContext } from "./../Context/UserContext";

export default function Dashboard() {
  const { logout } = useContext(UserContext);
  const [view, setView] = useState("Main");

  const handleView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a" onClick={() => handleView("Main")}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a" onClick={() => handleView("HPChat")}>
          <Icon name="chat" />
          HP Chat
        </Menu.Item>
        <Menu.Item as="a" onClick={logout}>
          <Icon name="sign-out" />
          Logout
        </Menu.Item>
      </Sidebar>

      {view === "Main" ? <Main /> : <HPChat />}
    </div>
  );
}
