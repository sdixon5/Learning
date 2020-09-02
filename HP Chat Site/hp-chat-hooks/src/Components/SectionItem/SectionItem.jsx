import React, { useState, useEffect } from "react";
import { Item, Button } from "semantic-ui-react";

export default function SectionItem({ response }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(response);
  };

  useEffect(() => {
    let text = value.replace(/<[^>]*>?/gm, "\n");
    navigator.clipboard.writeText(text);
  }, [value]);

  return (
    <Item>
      <Item.Content style={{ width: "75vw" }}>
        <p dangerouslySetInnerHTML={{ __html: response }}></p>
      </Item.Content>
      <Item.Extra>
        <Button size="tiny" color="blue" floated="right" onClick={handleChange}>
          Copy To Clipboard
        </Button>
      </Item.Extra>
    </Item>
  );
}
