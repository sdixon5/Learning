import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import SectionList from "../SectionList/SectionList";
import IssueList from "./../IssueList/IssueList";
import "./Main.css";
import useInput from "../../Hooks/useInput";
import UserForm from "../UserForm/UserForm";

export default function Main() {
  const [responses, setResponses] = useState([
    {
      key: "Lines In Display",
      response: [
        "Device was accidentally dropped by a student during passing period. The device has lines in the display but no physical damage. Can I please get a box to send the device in for repair.", //,
        // "The student dropped the device during passing period. When the student picked the device up there were lines in the screen. I have since examined the device and found no external damage to the device."
      ],
    },
    {
      key: "Touchpad Issues",
      response: [
        "The device's touchpad is not working. There is no cursor movement and the left clicking does not work either. There is no physical damage to the device and an external mouse works just fine. Can I please get a box to send this device in for repair.",
      ],
    },
    {
      key: "Black Screen",
      response: [
        "The device has a black screen when turned on. You can see the light is turned on but there is no picture. There is no physical damage to the device. Plugging into a second monitor works. Can I please get a box to send this device in for repair.",
      ],
    },
    {
      key: "Keys Not Typing",
      response: [
        "The device has multiple keys that are not typing. An external keyboard works just fine. There is no physical damage to the device. Can I please get a box to send this device in for repair.",
      ],
    },
    {
      key: "Won't Turn on",
      response: [
        "The device is not turning on. Multiple chargers have been used and we are not getting a charging light. Either the battery or the motherboard is dead. There is no physical damage to the device. Can I please get a box to send this device in for repair.",
      ],
    },
    {
      key: "Motherboard",
      response: [
        "The device has a bad motherboard. The device will not turn on (no LED power light). There is a charging light when it is plugged in, but once again it will not turn on. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Rubber Nipple Missing",
      response: [
        "The device has a key with the rubber nipple missing. Due to this the key is not functioning. An external keyboard works just fine. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Broken Case",
      response: [
        "The device was accidentally dropped by a student during passing period. The device now has a broken case corner. The only damage is to the case itself. There is no functionality issues, everything works fine. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Missing Key",
      response: [
        "The device has a missing key, due to a broken latch. There is no physical damage to the device. An external keyboard works just fine. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Randomly Shutting Down",
      response: [
        "The device is randomly shutting down. The device is also overheating which may be leading to the shut downs. I am unable to determine if the shut down is due to the battery or motherboard. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Shift Keys",
      response: [
        "The device shift keys that are not typing. An external keyboard works just fine. There is no physical damage to the device. Can I please get a box to send this device in for repair.",
      ],
    },
    {
      key: "Flashing Charge LED",
      response: [
        "The device needs a new motherboard. The charging LED is flashing whether the device is on, plugged in, or off.  The only way to stop the flashing is to unplug the battery. Also, inside of crosh, when running battery_test command it returns a status of No Battery Found. I believe the port on the motherboard is at fault. Can I please get a box to send the device in for repair.",
      ],
    },
    {
      key: "Charging Issues",
      response: [
        "The device is not charging. There is no charging LED shown either. Multiple chargers have been used and none of them work. There is no physical damage to the device. Can I please get a box to send the device in for repair.",
      ],
    },
  ]);

  const [name, setName] = useInput("Shawn Dixon");
  const [phone, setPhone] = useInput("(970) 348-6546");
  const [email, setEmail] = useInput("sdixon3@greeleyschools.org");

  const [standardInfo, setStandardInfo] = useState([
    {
      key: "Contact Info",
      response: [
        `Company name (if any): Weld County School District 6<br/>Full Name: ${name}<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: ${phone}<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: ${email}<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`,
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

  const [sections, setSections] = useState(standardInfo);

  const updateSections = (response) => {
    if (response === "") {
      let oldSections = [...sections];
      oldSections.pop();
      setSections([...oldSections]);
    } else if (sections.length > standardInfo.length) {
      let oldSections = [...sections];
      oldSections.pop();
      setSections([...oldSections, response]);
    } else {
      setSections([...sections, response]);
    }
  };

  useEffect(() => {
    let oldSections = [...sections];
    let section = { ...oldSections[0] };
    section.response[0] = `Company name (if any): Weld County School District 6<br/>Full Name: ${name}<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: ${phone}<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: ${email}<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`;
    oldSections[0] = section;
    setSections([...oldSections]);

    let oldStandardInfo = [...standardInfo];
    let contactInfo = { ...oldStandardInfo[0] };
    contactInfo.response[0] = `Company name (if any): Weld County School District 6<br/>Full Name: ${name}<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: ${phone}<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: ${email}<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday`;
    oldStandardInfo[0] = contactInfo;
    setStandardInfo([...oldStandardInfo]);
  }, [name, phone, email]);

  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          <h1>HP Chat Responses</h1>
          <SectionList sections={sections} />
        </Grid.Column>
        <Grid.Column width={6}>
          <UserForm
            name={name}
            phone={phone}
            email={email}
            setName={setName}
            setPhone={setPhone}
            setEmail={setEmail}
          />
          <br />
          <IssueList responses={responses} updateSections={updateSections} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
