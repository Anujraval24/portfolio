import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";

const MenuItem = (props) => {
  return (
    <Fragment>
      <Menu.Item
        name={props.name}
        header={props.header}
        icon={props.icon}
        color={props.color}
        disabled={props.disabled}
        link={props.link}
        active={props.active}
        onClick={props.handleItemClick}
      />
    </Fragment>
  );
};

export default MenuItem;
