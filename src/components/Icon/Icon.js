import React, { Fragment } from "react";
import { Icon } from "semantic-ui-react";

const SemanticIcon = ({ name, link, as, size }) => {
  return (
    <Fragment>
      <Icon name={name} as={as} link={link} size={size} />
    </Fragment>
  );
};

export default SemanticIcon;
