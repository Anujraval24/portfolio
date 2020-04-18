import React, { Fragment } from "react";
import { Icon } from "semantic-ui-react";

const SemanticIcon = ({ name }) => {
  return (
    <Fragment>
      <Icon name={name} />
    </Fragment>
  );
};

export default SemanticIcon;
