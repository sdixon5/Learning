import React, { Component } from "react";
import "semantic-ui-react";
import { Container, Grid } from "semantic-ui-react";
import SectionList from "../SectionList/SectionList";
import IssueList from "../IssueList/IssueList";
import "semantic-ui-css/semantic.min.css";
import "./Main.css";

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responses: [
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
            ],
            standardInfo: [
                {
                    key: "Contact Info",
                    response: [
                        "Company name (if any): Weld County School District 6<br/><br/>Full Name: Shawn Dixon<br/>Complete address with zip/postal code (US/Canada): 2204 5th Ave Greeley, CO 80631 USA<br/>Contact Phone: (970) 348-6546<br/>Alternate phone (if any):  (970) 348-6500<br/>Email address: sdixon3@greeleyschools.org<br/>Time Zone: Mountain Time<br/>Country: United States<br/>Best time to reach me is between 8am and 3pm Monday-Friday",
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
            ],
        };
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Column width={10}>
                        <h1>HP Chat Responses</h1>
                        <SectionList
                            responses={this.state.responses}
                            standardInfo={this.state.standardInfo}
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <IssueList responses={this.state.responses}/>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Main;
