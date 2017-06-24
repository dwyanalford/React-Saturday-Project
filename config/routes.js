import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Index from "../components/Index";
import Profile from "../components/Profile";
import Filter from "../components/Filter";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
    <Route path="profile" component={Profile} />
    <Route path="filter" component={Filter} />
    <IndexRoute component={Index} />
    </Route>
  </Router>
);

export default routes;