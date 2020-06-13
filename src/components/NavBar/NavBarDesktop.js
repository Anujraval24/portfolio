import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import MenuItem from "./MenuItem";

const NavBarDesktop = ({ activeItem, handleItemClick, handleSidebar }) => {
  return (
    <Fragment>
      <Menu size="large" fluid widths="7">
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
          active={activeItem === "workExperience"}
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

export default NavBarDesktop;
