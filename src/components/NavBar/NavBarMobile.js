import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import SemanticIcon from "../Icon/Icon";

const NavBarMobile = ({
  activeItem,
  handleItemClick,
}) => {
  return (
    <Fragment>
      <Menu stackable vertical icon="labeled" fluid floated>
        <Menu.Item header>
          <SemanticIcon name="heart" />
        </Menu.Item>
        <MenuItem
          name="about"
          active={activeItem === "about"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="workExperience"
          active={activeItem === "workexperience"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="projects"
          active={activeItem === "projects"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="education"
          active={activeItem === "education"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="awards"
          active={activeItem === "awards"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="interests"
          active={activeItem === "interests"}
          handleItemClick={handleItemClick}
        />
      </Menu>
    </Fragment>
  );
};

export default NavBarMobile;
