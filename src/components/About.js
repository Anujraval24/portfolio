import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import SemanticCard from "./Card";

const About = (props) => {
  const history = useHistory();
  const header = "Anuj B. Raval";
  const description = "MERN Stack Developer";
  const extraContentMeta = (
    <div>
      I am Self Taught Developer with <br />
      Bachelor's Degree in <br />
      Computer Engineering from Alpha College
    </div>
  );
  const imageSrc =
    "https://avatars1.githubusercontent.com/u/17050077?s=460&u=708e6c60fb62d55625c233eab0aba40d2c048998&v=4";
  return (
    <div className="padding">
      <SemanticCard
        header={header}
        centered
        description={description}
        imageFloated="left"
        imageSize="medium"
        imageCircular={true}
        imageSrc={imageSrc}
        extraContent
        extraContentMeta={extraContentMeta}
      >
        <Button
          fluid
          size="large"
          icon="code"
          onClick={() => history.push("/portfolio/connectVia")}
          content="Connect Via Platforms"
        />
      </SemanticCard>
    </div>
  );
};

export default About;
