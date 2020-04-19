import React, { Component } from "react";
import {
  Header,
  Grid,
  Segment,
  Label,
  List,
  Responsive,
} from "semantic-ui-react";
import SemanticIcon from "./Icon/Icon";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <Responsive>
          <Grid padded columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Segment padded raised>
                  <Label attached="top">MERN Stack Developer</Label>
                  <Segment padded>
                    <Header as="h1" textAlign="center" content="DOT InfoTech" />
                    <Label>
                      <SemanticIcon name="calendar alternate outline" />
                      Joining Date
                      <Label.Detail>09/2018 - Present</Label.Detail>
                    </Label>
                    <Header as="h3" attached="top">
                      Tasks
                    </Header>
                    <Segment attached>
                      <List relaxed animated size="huge" selection divided>
                        <List.Item>
                          <List.Content>
                            <List.Header>
                              <List.Icon name="node js" />
                              Node JS
                              <List.Icon name="react" />
                              React JS
                            </List.Header>
                            <List.Description>
                              Worked On Multiple Client Projects - Admin Panel,
                              API &amp; Website
                            </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>GraphQL</List.Header>
                            <List.Description>
                              Worked on Project where I, wrote Automated Test
                              Cases with JEST for GraphQL Service, Implemented
                              Prisma.
                            </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>
                              <List.Icon name="node js" />
                              Node JS
                            </List.Header>
                            <List.Description>
                              Designed, Architected of Backend Node JS API
                              Structure <br />
                              with using Express JS, MongoDB ( Mongoose JS ),
                              Babel 7, Swagger UI, ES6 syntax, @hapi/joi
                            </List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>
                              <List.Icon name="node js" />
                              Node JS
                              <List.Icon name="react" />
                              React JS
                            </List.Header>
                            <List.Description>
                              Worked an E-Commerce Website &amp; API
                              <br />
                              where I, implemented functionlity of Product on
                              Backend Side <br /> &amp; Cart functionlity,
                              Payment Method of Stripe, PayPal on FrontEnd Side
                            </List.Description>
                          </List.Content>
                        </List.Item>
                      </List>
                    </Segment>
                  </Segment>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}
