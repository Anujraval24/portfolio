import React, { Fragment } from "react";
import { Button, Segment, Grid, Card, Label } from "semantic-ui-react";
import Link from "../Link";

const SocialButtons = (props) => {
  return (
    <Fragment>
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label attached="top" size="large">
            Connect Via
          </Label>
          <Segment padded raised>
            <Grid divided doubling relaxed stackable>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Link to="mailto:anujraval24@gmail.com" target="_blank">
                    <Button color="blue" fluid icon="mail" content="Gmail" />
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link to="https://github.com/Anujraval24" target="_blank">
                    <Button
                      color="black"
                      fluid
                      icon="github"
                      content="Github"
                    />
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link
                    to="https://www.linkedin.com/in/anujraval"
                    target="_blank"
                  >
                    <Button
                      color="linkedin"
                      fluid
                      icon="linkedin"
                      content="Linkedin"
                    />
                  </Link>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={4}>
                <Grid.Column>
                  <Link to="https://twitter.com/annujraval" target="_blank">
                    <Button
                      color="twitter"
                      icon="twitter"
                      fluid
                      content="Twitter"
                    />
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link
                    to="https://www.instagram.com/annujraval"
                    target="_blank"
                  >
                    <Button
                      color="instagram"
                      content="Personal"
                      icon="instagram"
                      fluid
                    />
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Label
                    content="Cooking Page"
                    pointing="below"
                    size="large"
                    color="blue"
                  />
                  <Grid columns={2} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <Link
                          to="https://www.instagram.com/anujr.cooks"
                          target="_blank"
                        >
                          <Button color="instagram" icon="instagram" fluid />
                        </Link>
                      </Grid.Column>
                      <Grid.Column>
                        <Link
                          to="https://www.facebook.com/Anuj.cooks"
                          target="_blank"
                        >
                          <Button color="facebook" icon="facebook" fluid />
                        </Link>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
                <Grid.Column>
                  <Link
                    to="https://join.skype.com/invite/pwoxo0zCNpSS"
                    target="_blank"
                  >
                    <Button color="blue" icon="skype" fluid content="Skype" />
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Card>
    </Fragment>
  );
};

export default SocialButtons;
