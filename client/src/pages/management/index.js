import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Placements } from './placements';
import { Students } from './students';

const Management = () => (
  <Fragment>
    <Route path="/management/placements" component={Placements} />
    <Route path="/management/students" component={Students} />
  </Fragment>
);

export { Management };
