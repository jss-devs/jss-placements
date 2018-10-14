import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { CheckMobile } from '../../components/CheckMobile';
import { Notices } from './notices';
import { Notifs } from './notifs';

const StudentCommon = () => (
  <div>
    <h1>Student Common</h1>
    <CheckMobile yes={<h2>On Mobile</h2>} no={<h1>On Desktop</h1>} />
    <Link to="/student/notices">Notices</Link>
    <Link to="/student/notifs">Notifs</Link>
  </div>
);

const Student = () => (
  <Fragment>
    <Route path="/student" component={StudentCommon} />
    <Route exact path="/student/notices" component={Notices} />
    <Route exact path="/student/notifs" component={Notifs} />
  </Fragment>
);

export { Student };
