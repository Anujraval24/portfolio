import React, { Fragment } from "react";

import { Segment, Grid, Tab } from "semantic-ui-react";

import Certifications from "./Certifications";
import OpenSource from "./OpenSource";

const panes = [
  {
    menuItem: {
      key: "certifications",
      icon: "certificate",
      content: "Certifications",
    },
    render: () => (
      <Tab.Pane>
        <Certifications />
      </Tab.Pane>
    ),
  },
  {
    menuItem: {
      key: "os",
      icon: "terminal",
      content: "Open Source Contributions",
    },
    render: () => (
      <Tab.Pane>
        <OpenSource />
      </Tab.Pane>
    ),
  },
];

const Others = () => {
  return (
    <Fragment>
      <Grid raised doubling columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Segment raised piled>
              <Tab
                grid={{ paneWidth: 12, tabWidth: 4 }}
                menu={{
                  fluid: true,
                  pointing: true,
                  secondary: true,
                }}
                panes={panes}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default Others;
