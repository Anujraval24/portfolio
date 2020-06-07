import React from "react";
import {
  Segment,
  Label,
  Header,
  Card,
  Divider,
  Icon,
  Message,
  List,
  Grid,
} from "semantic-ui-react";
import Link from "./Link";

const Projects = (props) => {
  const project1 = [
    <div>
      An Android Application <br />
      based on Real Time Object Translation
    </div>,
  ];
  const project2 = [
    "It is built using NodeJS, ExpressJS, ",
    "MongoDB, Mongoose JS, SendGrid, JWT.IO",
  ];
  const project2features = [
    "User Signup via Email | Phone ( OTP )",
    "User Login",
    "Forgot Password via Email | Phone",
    "Reset Password",
    "Change Password",
  ];
  const list = [
    "ExpressJS framework",
    "MongoDB as Database, Connection via MongooseJS",
    "Code Compiling with Babel 7",
    "Custom Middleware for Authentication JWT.IO & Role Based Authorization",
    "Request Validator Custom Middleware @hapi/joi",
    "Twilio Service for OTP Send & Verify",
    "File Upload System via Multer Configuration",
    "Thumbnail Generator with GraphicsMagick and ImageMagick",
    "Code Formatting with Prettier",
  ];
  const project3 = (
    <Message header="Features" list={list} />
  );
  return (
    <div className="padding">
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label attached="top" size="large">
            Projects
          </Label>
          <Segment padded raised>
            <Header as="h2" textAlign="center" content="Things Translator" />
            <Divider />
            <Message list={project1} key={Math.random()} />
            <Divider />
            <Icon size="big" name="android" />
            <Link
              to="https://github.com/Anujraval24/ThingsTranslator"
              target="_blank"
            >
              <Label
                as="a"
                circular
                content="Github Repo"
                icon="github"
                color="black"
              />
            </Link>
          </Segment>
          <Segment padded raised>
            <Header as="h2" textAlign="center" content="User Authentication" />
            <Divider />
            <Message>{project2}</Message>
            <Message
              header="Features"
              list={project2features}
            />
            <Divider />
            <Icon size="big" name="node" />
            <Icon size="big" name="node js" />
            <Link
              to="https://github.com/Anujraval24/UserAuthentication"
              target="_blank"
            >
              <Label
                as="a"
                circular
                content="Github Repo"
                icon="github"
                color="black"
              />
            </Link>
          </Segment>
          <Segment padded raised>
            <Header
              as="h2"
              textAlign="center"
              content="Node JS REST-API Structure"
            />
            <Divider />
            {project3}
            <Divider />
            <Icon size="big" name="node" />
            <Icon size="big" name="node js" />
            <Link
              to="https://github.com/Anujraval24/nodejs-api-boilerplate"
              target="_blank"
            >
              <Label
                as="a"
                circular
                content="Github Repo ( PRIVATE ) "
                icon="github"
                color="black"
              />
            </Link>
          </Segment>
          <Segment padded raised>
            <Header as="h2" textAlign="center" content="Portfolio In React" />
            <Divider />
            <Message content="Create React App &amp; React Semantic UI"></Message>
            <Icon size="big" name="react" />
            <Icon size="big" name="js" />
            <Link to="https://github.com/Anujraval24/portfolio" target="_blank">
              <Label
                as="a"
                circular
                content="Github Repo"
                icon="github"
                color="black"
              />
            </Link>
          </Segment>
          <Segment padded raised>
            <Header
              as="h2"
              textAlign="center"
              content="Recipe Web Application"
            />
            <Divider />
            <List relaxed animated size="large" selection divided>
              <Grid divided doubling stackable padded>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <List.Item>
                      <List.Content>
                        <List.Header>Backend</List.Header>
                        <List.Description>
                          Node JS | Express JS
                        </List.Description>
                        <List.Description>
                          MongoDB | MongoDB Atlas Cloud
                        </List.Description>
                        <List.Description>
                          Authentication | JWT | Cookies
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <List.Item>
                      <List.Content>
                        <List.Header>FrontEnd</List.Header>
                        <List.Description>
                          React JS | Hooks | Context
                        </List.Description>
                        <List.Description>React Semantic UI</List.Description>
                        <List.Description>Axios Fetch Context</List.Description>
                        <List.Description>
                          Authentication Context | JWT | Cookies
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </List>
            <Message>
              <Message.Header>Features</Message.Header>
              <Message.List>
                <List as="ul">
                  <List.Item as="li">
                    Anyone Can View The Posted Recipes
                  </List.Item>
                  <List.Item as="li">
                    User Can
                    <List.List as="ul">
                      <List.Item as="li">Signup via Email | Username</List.Item>
                      <List.Item as="li">Login via Email | Username</List.Item>
                      <List.Item as="li">
                        Forgot Password via Email | Username
                      </List.Item>
                      <List.Item as="li">Reset Password</List.Item>
                      <List.Item as="li">Change Password</List.Item>
                      <List.Item as="li">Update Their Profile</List.Item>
                      <List.Item as="li">Post New Recipe</List.Item>
                      <List.Item as="li">Save, Like a Recipe</List.Item>
                      <List.Item as="li">
                        View | Edit All Their Posted Recipes
                      </List.Item>
                      <List.Item as="li">
                        Add | Search New Tags, Categories
                      </List.Item>
                      <List.Item as="li">
                        Comment on other Users Recipes
                      </List.Item>
                    </List.List>
                  </List.Item>
                </List>
              </Message.List>
            </Message>

            <Segment>
              <Header content="Repositories &amp; App URLs" />
              <Grid doubling divided stackable>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Link
                      to="https://github.com/Anujraval24/recipe-app-backend-nodejs"
                      target="_blank"
                    >
                      <Label
                        as="a"
                        circular
                        content="Backend Github Repo ( PRIVATE )"
                        size="large"
                        icon="github"
                        color="black"
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Link
                      to="https://recipe-appapi.herokuapp.com/api-docs"
                      target="_blank"
                    >
                      <Label
                        as="a"
                        circular
                        content="Backend Swagger API"
                        icon="file code"
                        size="large"
                        color="black"
                      />
                    </Link>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={8}>
                    <Link
                      to="https://github.com/Anujraval24/recipe-app-frontend-react-context-hook"
                      target="_blank"
                    >
                      <Label
                        as="a"
                        circular
                        content="Frontend Github Repo ( PRIVATE )"
                        size="large"
                        icon="github"
                        color="black"
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Link
                      to="http://recipe-appreact.herokuapp.com/"
                      target="_blank"
                    >
                      <Label
                        as="a"
                        circular
                        content="Frontend React App"
                        icon="react"
                        size="large"
                        color="black"
                      />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider />
              <Icon size="big" name="node" />
              <Icon size="big" name="node js" />
              <Icon size="big" name="react" />
              <Icon size="big" name="js" />
            </Segment>
          </Segment>
        </Segment>
      </Card>
    </div>
  );
};
export default Projects;
