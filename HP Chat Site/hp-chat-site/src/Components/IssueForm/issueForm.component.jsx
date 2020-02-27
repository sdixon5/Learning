import React from "react";
import "./issueForm.component.css";
import { Form } from "semantic-ui-react";
import { IssueDropdown } from '../IssueDropdown/issueDropdown.component.jsx';

const IssueForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Issue</label>
        <IssueDropdown></IssueDropdown>
      </Form.Field>
    </Form>
  );
};

export default IssueForm;

// export class IssueForm extends React.Component {
//   render() {
//     return (
//       <Form>
//         <Form.Field>
//           <label>Issue</label>
//         </Form.Field>
//       </Form>
//     );
//   }
// }
