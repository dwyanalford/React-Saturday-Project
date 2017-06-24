import React from "react";
import { Route, IndexRoute, Router, hashHistory } from "react-router";

import Index from "../components/index";
import Profile from "../components/profile";
import Filter from "../components/filter";

// Export the Routes
module.exports = (

  <Router history={hashHistory}>

    <Route path="/" component={Index}>
      <Route path="profile" component={Profile} />
      <Route path="filter" component={Filter} />
      <IndexRoute component={Index} />
    </Route>
  </Router>
);



