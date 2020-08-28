import React from "react";
import { Item, Button } from "semantic-ui-react";

export default function SectionItem({ response }) {
  return (
    <Item>
      <Item.Content>
        {/* <p>{response}</p> */}
        <p dangerouslySetInnerHTML={{ __html: response }}></p>
      </Item.Content>
      <Item.Extra>
        <Button size="tiny" color="blue" floated="right">
          Copy To Clipboard
        </Button>
      </Item.Extra>
    </Item>
  );
}
