import React, { Fragment } from "react";
import {
  Segment,
  Label,
  Header,
  Divider,
} from "semantic-ui-react";
import Link from "./Link";

const Certifications = () => {
  return (
    <Fragment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Smart India Hackathon 2017"
          subheader="Smart India Hackthon"
        />
        <Divider />
        <Link
          to="https://drive.google.com/file/d/1p9Sa8oRyLFsn91XBtl-xrQswRMbXUO8K/view?usp=sharing"
          target="_blank"
        >
          <Label as="a" basic content="See Certificate" color="black" />
        </Link>
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Ethical Hacking Certificate"
          subheader="ALPHA COLLEGE OF ENGG. &amp; TECH., KHATRAJ, KALOL 051"
        />
        <Divider />
        <Link
          to="https://drive.google.com/file/d/1pQHgo7hkArcypGWEgjFUe8Fm_U5nkUFs/view?usp=sharing"
          target="_blank"
        >
          <Label as="a" basic content="See Certificate" color="black" />
        </Link>
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Invent-O-Fest"
          subheader="ALPHA COLLEGE OF ENGG. &amp; TECH., KHATRAJ, KALOL 051"
        />
        <Divider />
        <Link
          to="https://drive.google.com/file/d/13QySV0U-a-nF1DiRl47PsUuS3W5Z155B/view?usp=sharing"
          target="_blank"
        >
          <Label as="a" basic content="See Certificate" color="black" />
        </Link>
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="GIS - Girlscript India Summit"
          subheader="GirlScript Foundation"
        />
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="Image Processing Workshop"
          subheader="Technofora’17, Nirma University"
        />
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="I-Entrepreneur"
          subheader="LD college of Engineering and Technology"
        />
      </Segment>
      <Segment padded raised>
        <Header
          as="h3"
          textAlign="center"
          content="OWASP Gandhinagar Meetup Seminar on Web and Cyber Security"
          subheader="Mozilla Gujarat"
        />
      </Segment>
    </Fragment>
  );
};
export default Certifications;
