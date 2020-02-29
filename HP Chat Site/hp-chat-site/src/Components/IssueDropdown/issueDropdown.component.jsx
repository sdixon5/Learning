import React from 'react';
import './issueDropdown.component.css';
import { Dropdown, Icon } from 'semantic-ui-react';
import { IssueDropdownItems } from '../IssueDropdownItems/issueDropdownItems.component.jsx';


export const IssueDropdown = ({responses}) => {
    return (
        <Dropdown
            placeholder='Issue'
            selection
            options={responses.map(res => (
                <IssueDropdownItems key={responses[res]} response={res}/>
            ))}
        >

            <Icon></Icon>
            {/* <IssueDropdownItems></IssueDropdownItems> */}
            
            {/* {responses.map(res => (
                <IssueDropdownItems response={res}/>
            ))} */}

        </Dropdown>
    );
};