import React from "react";
import { Header, Segment, Label, List, Card, Divider } from "semantic-ui-react";
import SemanticIcon from "./Icon/Icon";

const Experience = (props) => {
  return (
    <div className="padding">
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label attached="top" size="big">
            MERN Stack Developer
          </Label>
          <Header as="h1" textAlign="center" content="DOT InfoTech" />
          <Label>
            <SemanticIcon name="calendar alternate outline" />
            Joining Date
            <Label.Detail>09/2018 - Present</Label.Detail>
          </Label>
          <Divider />
          <List relaxed animated size="huge" selection divided>
            <Segment raised>
              <List.Item>
                <List.Content>
                  <List.Header>
                    <List.Icon size="huge" name="node" />
                    <List.Icon size="huge" name="node js" />
                    <List.Icon size="huge" name="react" />
                    <List.Icon size="huge" name="js" />
                  </List.Header>
                  <List.Description>
                    Worked On Multiple Client Projects - Admin Panel, API &amp;
                    Website
                  </List.Description>
                </List.Content>
              </List.Item>
            </Segment>
            <Segment raised>
              <List.Item>
                <List.Content>
                  <List.Header>
                    <List.Icon size="big" name="code" /> GraphQL
                  </List.Header>
                  <List.Description>
                    Worked on Project where I, wrote Automated Test Cases with
                    JEST for GraphQL Service, Implemented Prisma.
                  </List.Description>
                </List.Content>
              </List.Item>
            </Segment>
            <Segment raised>
              <List.Item>
                <List.Content>
                  <List.Header>
                    <List.Icon size="huge" name="node" />
                    <List.Icon size="huge" name="node js" />
                  </List.Header>
                  <List.Description>
                    Designed, Architected of Backend Node JS API Structure{" "}
                    <br />
                    with using Express JS, MongoDB ( Mongoose JS ), Babel 7,
                    Swagger UI, ES6 syntax, @hapi/joi
                  </List.Description>
                </List.Content>
              </List.Item>
            </Segment>
            <Segment raised>
              <List.Item>
                <List.Content>
                  <List.Header>
                    <List.Icon size="huge" name="node" />
                    <List.Icon size="huge" name="node js" />
                    <List.Icon size="huge" name="react" />
                    <List.Icon size="huge" name="js" />
                  </List.Header>
                  <List.Description>
                    Worked an E-Commerce Website &amp; API
                    <br />
                    where I, implemented functionlity of Product on Backend Side{" "}
                    <br /> &amp; Cart functionlity, Payment Method of Stripe,
                    PayPal on FrontEnd Side
                  </List.Description>
                </List.Content>
              </List.Item>
            </Segment>
          </List>
        </Segment>
      </Card>
    </div>
  );
};

export default Experience;
