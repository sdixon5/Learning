import React, { useState, createContext } from "react";

//this would be used for Default Standard Info Values
// const defaultStandardInfo = [
//   {
//     key: "Contact Info",
//     response: [
//       `Company name (if any): Weld County School District 6<br/>Full Name: ${name}<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: ${phone}<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: ${email}<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`,
//     ],
//   },
//   {
//     key: "Intro",
//     response: [
//       "I'm doing well, thank you for asking. How are you doing today?",
//     ],
//   },
//   {
//     key: "Conclusion",
//     response: [
//       "Thank you for your time and assistance. Have a nice rest of your day!",
//       "No that will be all. Thank you for your time and assistance. Have a nice rest of your day!",
//     ],
//   },
// ];

export const StandardInfoContext = createContext();

export function StandardInfoProvider({ children }) {
  const [standardInfo, setStandardInfo] = useState([
    {
      key: "Contact Info",
      response: [
        `Company name (if any): Weld County School District 6<br/>Full Name: <br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: (970) 348-6565<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: <br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`,
      ],
    },
    {
      key: "Intro",
      response: [
        "I'm doing well, thank you for asking. How are you doing today?",
      ],
    },
    {
      key: "Conclusion",
      response: [
        "Thank you for your time and assistance. Have a nice rest of your day!",
        "No that will be all. Thank you for your time and assistance. Have a nice rest of your day!",
      ],
    },
  ]);

  return (
    <StandardInfoContext.Provider value={{ standardInfo, setStandardInfo }}>
      {children}
    </StandardInfoContext.Provider>
  );
}
