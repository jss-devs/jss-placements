import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Auth } from './auth';
import { Student } from './student';
import { Management } from './management';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/auth/login">Login</Link>
    <Link to="/auth/signup">Signup</Link>
  </div>
)

const HomeCommon = () => (
  <div>
    Navbar
    <Link to="/">Home</Link>
  </div>
)

const Pages = () => (
  <Router>
    <Fragment>
      <Route path="/" component={HomeCommon} />
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route path="/student" component={Student} />
      <Route path="/management" component={Management} />
    </Fragment>
  </Router>
);

export { Pages };
