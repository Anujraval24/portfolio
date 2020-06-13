import React, { Fragment } from "react";
import { Segment, Grid, Card, Label, Divider, Icon } from "semantic-ui-react";

const TechnicalSkills = () => {
  return (
    <Fragment>
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label
            attached="top"
            size="large"
            content="Technical Skills | Tools"
          />
          <Segment padded raised>
            <Label
              size="large"
              attached="top"
              content="JavaScript Frameworks"
              icon="js square"
            />
            <Grid divided doubling>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label size="large" icon="node js" content="Node JS" />
                </Grid.Column>
                <Grid.Column>
                  <Label size="large" content="React JS" icon="react js" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label size="large" icon="node" content="Express JS" />
                </Grid.Column>
                <Grid.Column>
                  <Label size="large" content="Redux, Redux-Saga" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Label size="large" attached="top" content="Web Design" />
            <Grid divided doubling>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label size="large" icon="html5" content="HTML" />
                </Grid.Column>
                <Grid.Column>
                  <Label size="large" icon="sass" content="SCSS" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label size="large" content="Material-UI" />
                </Grid.Column>
                <Grid.Column>
                  <Label size="large" content="Semantic-UI" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Label
              size="large"
              attached="top"
              content="Database"
              icon="database"
            />
            <Grid divided doubling>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Label size="large" icon="server" content="MongoDB" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Label size="large" icon="hdd" content="MySQL" />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Label size="large" content="ODM: Mongoose JS" />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Label size="large" content="ORM: Sequelize" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment>
            <Label size="large" attached="top" content="Others" />
            <Grid divided doubling>
              <Grid.Row columns={2}>
                <Grid.Column width={8}>
                  <Label size="large">
                    <Icon name="npm" size="large" />
                    <br />
                    Package Manager: yarn | npm
                  </Label>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Label size="large" content="">
                    <Icon name="database" size="large" />
                    <Icon name="lock" size="large" />
                    <Icon name="aws" size="large" />
                    <Divider />
                    Services: MongoDB Cloud Atlas, Auth0, Serverless
                  </Label>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Label size="large">
                    <Icon name="github" size="large" />
                    <Icon name="git" size="large" />
                    <Icon name="bitbucket square" size="large" />
                    <Divider />
                    Project Management: JIRA, Bitbucket, Github, GIT
                  </Label>
                </Grid.Column>
                <Grid.Column>
                  <Label size="large">
                    <Icon name="code" size="large" />
                    <Icon name="file code" size="large" />
                    <Icon name="windows" size="large" />
                    <Divider />
                    Tools: Postman, DBeaver, MongoDB Compass, Swagger UI, VSCode
                    <Divider />
                    OS: Windows 10, Ubuntu 18.04
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment>
      </Card>
    </Fragment>
  );
};

export default TechnicalSkills;
