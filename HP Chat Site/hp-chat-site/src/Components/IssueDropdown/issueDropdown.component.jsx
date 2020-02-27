import React from 'react';
import './issueDropdown.component.css';
import { Dropdown, Icon } from 'semantic-ui-react';

export const IssueDropdown = () => {
    return (
        <Dropdown
            placeholder='Issue'
            selection
        >
            <Icon></Icon>

        </Dropdown>
    );
};