import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { Auth } from './auth';
import { Student } from './student';
import { Management } from './management';

const Home = () => (
  <Fragment>
    <HeroSection />
  </Fragment>
)

const HomeCommon = () => (
  <Fragment>
    <Navbar />
  </Fragment>
)

const Pages = () => (
  <Router>
    <Fragment>
      <Route path="/" component={HomeCommon} />
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/student" component={Student} />
        <Route path="/management" component={Management} />
      </div>
    </Fragment>
  </Router>
);

export { Pages };
