import React, { Component, createRef } from "react";
import "semantic-ui-react";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
    Advertisement,
    Container,
    Header,
    Sticky,
    Grid,
    Image,
    Ref,
    Segment,
    Icon,
    Button,
    Sidebar,
} from "semantic-ui-react";
import "./ProfilePage.css";
//import {banner} from '/assets/iron-man-banner.jpg';
//import of semantic-ui-css/semantic.min.css is in the index.js

export class ProfilePage extends Component {
    contextRef = createRef();

    render() {
        return (
            <Container className="ProfilePage">
                <Container
                    style={{ zIndex: -1 }}
                    className="ProfilePage-banner"
                >
                    <Image
                        style={{ height: "300px", zIndex: -5 }}
                        src="/assets/iron-man-banner.jpg"
                        alt=""
                        fluid
                    />
                    {/* <Sidebar animation="overlay" visible fluid>
                        <ProfileCard />
                    </Sidebar> */}
                </Container>

                {/* <Grid>
                    <Grid.Row columns={2} className="ProfilePage-card">
                        <Grid.Column width={4}>
                            <Container>
                                <ProfileCard />
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2} className="ProfilePage-main">
                        <Grid.Column width={4}>
                            
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <p
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-all",
                                }}
                            >
                                ad;lfkjaop[djfa;lksdjf;lsdjf;aldsfdslkfjlsdaknf;ladsnfaiejh;wenfj;oifnj;ewoaifj;aweiofn;weafijewa;finjewa;ofinhd;fjeijaw;elkfnds;lfkasdjnf;oipewanwe;oiweeeeeeeeeeeeeeeeeeeeee;dslkfnjas;ldknfa;ewoijnasd;lkfnsa;dlkfjieownaq;eonsda;ofijhnqo;pfeopijapif
                            </p>

                            <Segment placeholder>
                                <Header icon>
                                    <Icon name="pdf file outline" />
                                    No documents are listed for this customer.
                                </Header>
                                <Button primary>Add Document</Button>
                            </Segment>

                            <Segment.Group>
                                <Segment>Top</Segment>
                                <Segment>Middle</Segment>
                                <Segment>Middle</Segment>
                                <Segment>Middle</Segment>
                                <Segment>Bottom</Segment>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid> */}
            </Container>

            // <div className="grid-container">
            //     <div className="Image">
            //         <Image
            //             style={{ height: "300px", zIndex: -5 }}
            //             src="/assets/iron-man-banner.jpg"
            //             alt=""
            //             fluid
            //         />
            //     </div>
            //     <div className="Card">
            //         <ProfileCard />
            //     </div>
            //     <div className="Main">
            //         <p
            //             style={{
            //                 wordWrap: "break-word",
            //                 wordBreak: "break-all",
            //             }}
            //         >
            //             ad;lfkjaop[djfa;lksdjf;lsdjf;aldsfdslkfjlsdaknf;ladsnfaiejh;wenfj;oifnj;ewoaifj;aweiofn;weafijewa;finjewa;ofinhd;fjeijaw;elkfnds;lfkasdjnf;oipewanwe;oiweeeeeeeeeeeeeeeeeeeeee;dslkfnjas;ldknfa;ewoijnasd;lkfnsa;dlkfjieownaq;eonsda;ofijhnqo;pfeopijapif
            //         </p>

            //         <Segment placeholder>
            //             <Header icon>
            //                 <Icon name="pdf file outline" />
            //                 No documents are listed for this customer.
            //             </Header>
            //             <Button primary>Add Document</Button>
            //         </Segment>

            //         <Segment.Group>
            //             <Segment>Top</Segment>
            //             <Segment>Middle</Segment>
            //             <Segment>Middle</Segment>
            //             <Segment>Middle</Segment>
            //             <Segment>Bottom</Segment>
            //         </Segment.Group>
            //     </div>
            // </div>
        );
    }
}

export default ProfilePage;
