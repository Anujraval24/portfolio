import React, { Fragment } from "react";
import { Image } from "semantic-ui-react";

const SemanticImage = ({ floated, size, src }) => {
  return (
    <Fragment>
      <Image floated={floated} size={size} src={src} />
    </Fragment>
  );
};

export default SemanticImage;
