import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import { Manage } from './manage';
import { Shortlist } from './shortlist';

const PlacementPage = () => (
  <div>
    <h1>PlacementPage</h1>
    <Link to="/management/placements/shortlist">Shortlist</Link>
    <Link to="/management/placements/manage">Manage Placement</Link>
  </div>
);

const Placements = () => (
  <Fragment>
    <Route exact path="/management/placements" component={PlacementPage} />
    <Route exact path="/management/placements/manage" component={Manage} />
    <Route
      exact
      path="/management/placements/shortlist"
      component={Shortlist}
    />
  </Fragment>
);

export { Placements };
