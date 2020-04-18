import React, { useState } from "react";
import SemanticCard from "./Card";
import SocialButtons from "./SocialButtons";
import { Button } from "semantic-ui-react";

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
    <div>
      <SemanticCard
        header={header}
        centered
        description={description}
        imageFloated="left"
        imageSize="circular"
        imageSrc={imageSrc}
        extraContent
        extraContentMeta={extraContentMeta}
      >
        <Button
          onClick={() => setViewMore(!viewMore)}
          content="Toggle Social Profiles"
        />
        {viewMore && <SocialButtons />}
      </SemanticCard>
    </div>
  );
};

export default About;
