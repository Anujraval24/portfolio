import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import SemanticCard from "./Card";
import SocialButtons from "./SocialButtons";

const About = (props) => {
  const [viewMore, setViewMore] = useState(false);
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
          icon="user circle outline"
          onClick={() => {
            setViewMore(!viewMore);
          }}
          content="Toggle Social Profiles"
        />
        {viewMore && <SocialButtons />}
      </SemanticCard>
    </div>
  );
};

export default About;
