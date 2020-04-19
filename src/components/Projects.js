import React from "react";
import {
  Segment,
  Label,
  Header,
  Card,
  Divider,
  Icon,
  Message,
} from "semantic-ui-react";
import Link from "./Link";

const Projects = (props) => {
  const project1 = (
    <div>
      An Android Application <br />
      based on Real Time Object Translation
    </div>
  );
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
  const project3 = <Message header="Features" list={list} />;
  return (
    <div className="padding">
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label attached="top" size="large">
            Projects
          </Label>
          <Segment padded raised>
            <Header as="h2" textAlign="center" content="Things Translator" />
            <Message list={project1} />
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
            <Message>{project2}</Message>
            <Message header="Features" list={project2features} />
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
        </Segment>
      </Card>
    </div>
  );
};
export default Projects;
