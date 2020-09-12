import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import useInputState from "../../Hooks/useInputState";

export default function IssueList({ responses, updateStandardInfo }) {
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
  //const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // useEffect(() => {
  //   let result = keys.findIndex((info) => info.key === value);
  //   console.log(result);
  //   let test = "";
  //   keys.forEach((val) => {
  //     if (val.value === value) {
  //       test = value;
  //       console.log(test);
  //     }
  //   });
  // }, [value]);

  useEffect(() => {
    responses.forEach((response) => {
      //console.log("value is: " + value);
      //if (response.key === value) setIssue = response;
      if (response.key === value) {
        console.log(response);
        updateStandardInfo(response);
      }
    });
  }, [value]);

  const keys = [];

  responses.map((res) =>
    keys.push({ key: res.key, text: res.key, value: res.key })
  );

  // const findSelectedIssue = () => {
  //   return standardInfo.key === value;
  // };

  //can we have a useEffect to change the values within standardInfo (assuming we pass it down)
  //then it would update standard info causing a re-render?

  // useEffect(() => {
  //   //update standardInfo
  //   let foundObject = keys.find(findSelectedIssue);
  //   console.log(foundObject);
  //   standardInfo.push(value);
  // }, standardInfo);

  return (
    <Dropdown
      placeholder="Issue"
      fluid={true}
      selection={true}
      clearable={true}
      onChange={handleChange}
      //onSearchChange={handleChange}
      options={keys}
      value={value}
    />
  );
}
