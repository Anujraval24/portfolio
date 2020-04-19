import React, { Fragment } from "react";
import { Card } from "semantic-ui-react";
import SemanticImage from "../Image";

const SemanticCard = ({
  header,
  meta,
  description,
  extraContentMeta,
  extraContent,
  itemsPerRow,
  color,
  fluid,
  centered,
  imageFloated,
  imageSize,
  imageSrc,
  imageCircular,
  children,
}) => {
  return (
    <Fragment>
      <Card.Group itemsPerRow={itemsPerRow}>
        <Card color={color} centered={centered} fluid={fluid}>
          <Card.Content>
            <SemanticImage
              floated={imageFloated}
              size={imageSize}
              src={imageSrc}
              circular={imageCircular}
            />
            <Card.Header>{header}</Card.Header>
            <Card.Description>{description}</Card.Description>
            <Card.Meta>{meta}</Card.Meta>
          </Card.Content>
          <Card.Content extra={extraContent}>{extraContentMeta}</Card.Content>
          <Card.Content>{children}</Card.Content>
        </Card>
      </Card.Group>
    </Fragment>
  );
};

export default SemanticCard;
