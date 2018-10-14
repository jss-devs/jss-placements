import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { Manage } from './manage';

const StudentsPage = () => (
  <div>
    <h1>StudentsPage</h1>
    <Link to="/management/students/manage">Manage Students</Link>
  </div>
);

const Students = () => (
  <Fragment>
    <Route path="/management/students" component={StudentsPage} />
    <Route exact path="/management/students/manage" component={Manage} />
  </Fragment>
);

export { Students };
