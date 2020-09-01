import React, { useState } from "react";
import { Item, Button } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function SectionItem({ response }) {
  //console.log(response);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(response);
  };

  const onClick = (e) => {
    console.log(response);
  };

  return (
    <Item>
      <Item.Content>
        {/* <p>{response}</p> */}
        <p dangerouslySetInnerHTML={{ __html: response }}></p>
      </Item.Content>
      <Item.Extra>
        {/* <Button size="tiny" color="blue" floated="right" onClick={handleChange}>
          Copy To Clipboard
        </Button> */}
        <CopyToClipboard>
          <Button
            size="tiny"
            color="blue"
            floated="right"
            onClick={handleChange}
          >
            Copy To Clipboard
          </Button>
        </CopyToClipboard>
      </Item.Extra>
    </Item>
  );
}
