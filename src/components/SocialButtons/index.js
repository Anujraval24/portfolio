import React from "react";
import { Divider, Button } from "semantic-ui-react";
import Link from "../Link";

const SocialButtons = (props) => {
  return (
    <div>
      <Divider />
      <Link to="mailto:anujraval24@gmail.com" target="_blank">
        <Button color="blue" fluid floated icon="mail" content="Gmail" />
      </Link>
      <Divider />
      <Link to="https://github.com/Anujraval24" target="_blank">
        <Button color="black" fluid floated icon="github" content="Github" />
      </Link>
      <Divider />
      <Link to="https://www.linkedin.com/in/anujraval" target="_blank">
        <Button
          color="linkedin"
          fluid
          floated
          icon="linkedin"
          content="Linkedin"
        />
      </Link>
      <Divider />
      <Link to="https://twitter.com/annujraval" target="_blank">
        <Button
          color="twitter"
          fluid
          floated
          icon="twitter"
          content="Twitter"
        />
      </Link>
      <Divider />
      <Link to="https://www.instagram.com/annujraval" target="_blank">
        <Button
          color="instagram"
          content="Personal"
          fluid
          floated
          icon="instagram"
        />
      </Link>
      <Divider />
      <Link to="https://www.instagram.com/anujr.cooks" target="_blank">
        <Button
          color="instagram"
          content="Cooking"
          fluid
          floated
          icon="instagram"
        />
      </Link>
      <Divider />
      <Link to="https://join.skype.com/invite/pwoxo0zCNpSS" target="_blank">
        <Button color="blue" fluid floated icon="skype" content="Skype" />
      </Link>
    </div>
  );
};

export default SocialButtons;
