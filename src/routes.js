import React from "react";
import { Switch, Redirect, Route, Router } from "react-router-dom";

import About from "./components/About";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interest from "./components/Interests";

const PublicRoutes = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/portfolio/about" />
        <Redirect exact from="/portfolio/" to="/portfolio/about" />
        <Route exact path="/portfolio/about" component={About} />
        <Route exact path="/portfolio/workExperience" component={Experience} />
        <Route exact path="/portfolio/projects" component={Project} />
        <Route exact path="/portfolio/education" component={Education} />
        <Route exact path="/portfolio/awards" component={Project} />
        <Route exact path="/portfolio/interests" component={Interest} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
