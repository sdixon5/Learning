import React, { useState, useEffect } from "react";
import { Item, Button } from "semantic-ui-react";

export default function SectionItem({ response }) {
  //const [value, setValue] = useState("");

  // const handleChange = (e, response) => {
  //   console.log(response);
  //   setValue(response);
  // };

  const handleClick = () => {
    let text = response.replace(/<[^>]*>?/gm, "\n");
    //console.log(text);
    navigator.clipboard.writeText(text);
  };

  // useEffect(() => {
  //   //let text = value.replace(/<[^>]*>?/gm, "\n");
  //   let text = response.replace(/<[^>]*>?/gm, "\n");
  //   console.log(text);
  //   navigator.clipboard.writeText(text);
  // }, [value]);

  return (
    <Item>
      <Item.Content style={{ width: "75vw" }}>
        <p dangerouslySetInnerHTML={{ __html: response }}></p>
      </Item.Content>
      <Item.Extra>
        <Button
          size="tiny"
          color="blue"
          floated="right"
          onClick={() => handleClick()}
        >
          Copy To Clipboard
        </Button>
      </Item.Extra>
    </Item>
  );
}
