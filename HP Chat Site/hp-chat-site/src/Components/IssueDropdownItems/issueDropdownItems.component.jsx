import React from "react";
import "./issueDropdownItems.component.css";
import { Item } from "semantic-ui-react";

export const IssueDropdownItems = ({ response }) => {
  return (
    <Item>
      {response.key}
    </Item>
  );
};
