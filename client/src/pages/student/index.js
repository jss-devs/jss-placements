import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { CheckMobile } from '../../components/CheckMobile';
import { TabBar } from '../../components/TabBar';
import { Notices } from './notices';
import { Notifs } from './notifs';

const StudentCommon = () => (
  <CheckMobile
    yes={
      <Fragment>
        <TabBar />
      </Fragment>
    }
    no={
      <Fragment>
        <Link to="/student/notices">Notices</Link>
        <Link to="/student/notifs">Notifs</Link>
      </Fragment>
    }
  />
);

const Student = () => (
  <div style={{ padding: '20px 0 50px 0' }}>
    <Route path="/student" component={StudentCommon} />
    <Route exact path="/student/notices" component={Notices} />
    <Route exact path="/student/notifs" component={Notifs} />
  </div>
);

export { Student };
