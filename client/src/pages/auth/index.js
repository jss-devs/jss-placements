import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Card } from 'antd';

import classes from './auth.module.css';
import { Login } from './login';
import { Signup } from './signup';

const tabList = [
  {
    key: 'login',
    tab: <Link to="/auth/login">Login</Link>
  },
  {
    key: 'signup',
    tab: <Link to="/auth/signup">Signup</Link>
  }
];

const Auth = () => (
  <Switch>
    <Route
      path="/auth/:step(login|signup)"
      render={({ match }) => (
        <section className={classes.authContainer}>
          <Card
            tabList={tabList}
            activeTabKey={match.params.step}
            className={classes.authCard}
          >
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={Signup} />
          </Card>
        </section>
      )}
    />
    <Redirect to="/auth/login" />
  </Switch>
);

export { Auth };
