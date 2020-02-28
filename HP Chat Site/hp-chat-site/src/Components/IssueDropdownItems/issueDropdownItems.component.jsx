import React from 'react';
import './issueDropdownItems.component.css';
import { Item } from 'semantic-ui-react';

export const IssueDropdownItems = ({responses}) => {
    return (
        responses.map(res =>
            <Item>res.key</Item>
        )
        // responses.map(res =>
        //     <p>res</p>
        // )
        // <option>Blah</option>
    );
}