import React, { Fragment } from "react";
import { Image } from "semantic-ui-react";

const SemanticImage = ({ floated, size, src, circular }) => {
  return (
    <Fragment>
      <Image floated={floated} size={size} src={src} circular={circular} />
    </Fragment>
  );
};

export default SemanticImage;
