import React from "react";
import { Switch, Redirect, Route, Router } from "react-router-dom";

import About from "./components/About";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechnicalSkills from "./components/TechnicalSkills";

import AwardsInterest from "./containers/AwardsInterest/Index";

const PublicRoutes = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/portfolio/aboutMe" />
        <Redirect exact from="/portfolio/" to="/portfolio/aboutMe" />
        <Route exact path="/portfolio/aboutMe" component={About} />
        <Route exact path="/portfolio/workExperience" component={Experience} />
        <Route exact path="/portfolio/projects" component={Project} />
        <Route exact path="/portfolio/education" component={Education} />
        <Route
          exact
          path="/portfolio/awardsInterests"
          component={AwardsInterest}
        />
        <Route
          exact
          path="/portfolio/technicalSkills"
          component={TechnicalSkills}
        />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
