import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import useInputState from "../../Hooks/useInputState";

export default function IssueList({ responses }) {
  // const [value, setValue] = useState();

  // handleChange((event) => {
  //   let val = value;
  //   if (val === "") {
  //     setValue = "";
  //   } else {
  //     setValue = event.target.value;
  //   }
  // });

  const [value, handleChange, reset] = useInputState("");

  const keys = [];

  responses.map((res) =>
    keys.push({ key: res.key, text: res.key, value: res.key })
  );

  return (
    <Dropdown
      placeholder="Issue"
      fluid={true}
      selection={true}
      clearable={true}
      onChange={handleChange}
      options={keys}
    />
  );
}
