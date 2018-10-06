import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import { Login } from './login';
import { Signup } from './signup';

const Auth = () => (
  <Fragment>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/signup" component={Signup} />
  </Fragment>
)

export { Auth };
