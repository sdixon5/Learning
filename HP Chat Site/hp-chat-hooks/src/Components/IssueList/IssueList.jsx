import React, { useState, useEffect, useContext } from "react";
import { Dropdown } from "semantic-ui-react";
import useInputState from "../../Hooks/useInputState";
import useSections from "../../Hooks/useSections";
import { ResponsesContext } from "./../../Context/ResponsesContext";

export default function IssueList({ updateSections }) {
  const [value, handleChange, reset] = useInputState("");

  const responsesContext = useContext(ResponsesContext);

  useEffect(() => {
    if (value === "") {
      let response = "";
      updateSections(response);
    } else {
      responsesContext.responses.forEach((response) => {
        if (response.key === value) {
          updateSections(response);
        }
      });
    }
  }, [value]);

  const keys = [];

  responsesContext.responses.map((res) =>
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
      value={value}
    />
  );
}
