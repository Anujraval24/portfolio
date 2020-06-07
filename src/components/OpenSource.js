import React, { Fragment } from "react";
import { Segment, Label, Header, Message } from "semantic-ui-react";

import Link from "./Link";

const OpenSource = () => {
  return (
    <Fragment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Facebook Developer Circle: #HackDayAhm"
          subheader="Role: Team Developer"
        />
        <Message content="Facebook Development Circle Hackday at Icreate campus, Devdholera - Our team project was selected as Best Innovated Idea and its Implementation" />
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Hacktoberfest"
          subheader="Hackthon organized by Digital Ocean, Twilio, GitHub Every October"
        />
        <Link to="https://hacktoberfest.digitalocean.com/" target="_blank">
          <Label
            as="a"
            basic
            content="https://hacktoberfest.digitalocean.com"
            color="black"
          />
        </Link>
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="GirlScript Foundation"
          subheader="Role: Team Developer"
        />
      </Segment>
    </Fragment>
  );
};
export default OpenSource;
