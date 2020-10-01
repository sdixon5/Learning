import React from "react";
import { Segment, Item } from "semantic-ui-react";
import SectionItem from "../SectionItem/SectionItem";
import useSections from "./../../Hooks/useSections";

export default function SectionList({ sections }) {
  return (
    <Segment clearing>
      <Item.Group divided>
        {sections.map((infoObject) =>
          infoObject.response.map((innerResponse) => (
            <SectionItem response={innerResponse} />
          ))
        )}
      </Item.Group>
    </Segment>
  );
}
