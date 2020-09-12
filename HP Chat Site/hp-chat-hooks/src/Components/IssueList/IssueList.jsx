import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import useInputState from "../../Hooks/useInputState";

export default function IssueList({ responses, updateSections }) {
  const [value, handleChange, reset] = useInputState("");

  useEffect(() => {
    responses.forEach((response) => {
      if (response.key === value) {
        updateSections(response);
      }
    });
  }, [value]);

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
      value={value}
    />
  );
}
