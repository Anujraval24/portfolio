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
        <Redirect exact from="/" to="/about" />
        <Route exact path="/about" component={About} />
        <Route exact path="/workExperience" component={Experience} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/awards" component={Project} />
        <Route exact path="/interests" component={Interest} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
