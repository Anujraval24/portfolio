import React from "react";
import {
  Card,
  Segment,
  Label,
  Header,
  Divider,
  List,
} from "semantic-ui-react";
import Link from "./Link";

const Education = (props) => {
  return (
    <div className="padding">
      <Card raised centered fluid>
        <Segment padded raised attached piled>
          <Label attached="top" size="large">
            Education
          </Label>
          <Segment padded raised>
            <Header
              as="h2"
              image="https://react.semantic-ui.com/images/icons/school.png"
              textAlign="center"
              content="Bachelor's Degree"
            />
            <Header as="h4">
              in Computer Engineering From Alpha College Of Engg. &amp; Tech.
            </Header>
            <Divider />
            <List horizontal animated relaxed floated celled>
              <List.Item>
                <List.Icon name="calendar alternate outline" size="big" />
                <List.Content>
                  <List.Header>11/2014 – 05/2018</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="graduation" size="big" />
                <List.Content>
                  <List.Header>8.11 CPI</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="code" size="big" />
                <List.Content>
                  Final Year Project
                  <List.Header>
                    <Link
                      to="https://github.com/Anujraval24/ThingsTranslator"
                      target="_blank"
                    >
                      <List.Icon
                        name="github circle"
                        size="big"
                        color="black"
                      />
                      Things Translator
                    </Link>
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
          <Segment padded raised>
            <Header
              as="h2"
              image="https://react.semantic-ui.com/images/icons/school.png"
              textAlign="center"
              content="Higher Secondary School SC"
            />
            <Header as="h4">KGT Sadhana Vinay Mandir</Header>
            <Divider />
            <List horizontal animated relaxed>
              <List.Item>
                <List.Icon name="calendar alternate outline" size="big" />
                <List.Content>
                  <List.Header>2012 – 2014</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
          <Segment padded raised>
            <Header
              as="h2"
              image="https://react.semantic-ui.com/images/icons/school.png"
              textAlign="center"
              content="Secondary School SC"
            />
            <Header as="h4">KGT Sadhana Vinay Mandir</Header>
            <Divider />
            <List horizontal animated relaxed>
              <List.Item>
                <List.Icon name="calendar alternate outline" size="big" />
                <List.Content>
                  <List.Header>2010 – 2012</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Segment>
        </Segment>
      </Card>
    </div>
  );
};

export default Education;
