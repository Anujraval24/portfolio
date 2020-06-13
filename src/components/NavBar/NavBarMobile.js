import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import MenuItem from "./MenuItem";

const NavBarMobile = ({ activeItem, handleItemClick }) => {
  return (
    <Fragment>
      <Menu stackable vertical icon="labeled" fluid floated>
        <MenuItem
          name="connectVia"
          active={activeItem === "connectVia"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="aboutMe"
          active={activeItem === "aboutMe"}
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
          name="technicalSkills"
          active={activeItem === "technicalSkills"}
          handleItemClick={handleItemClick}
        />
        <MenuItem
          name="others"
          active={activeItem === "others"}
          handleItemClick={handleItemClick}
        />
      </Menu>
    </Fragment>
  );
};

export default NavBarMobile;
