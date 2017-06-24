import React from "react";
import { Route, IndexRoute, Router, hashHistory } from "react-router";

var Index = require("../components/index");
var Profile = require("../components/profile");
var Filter = require("../components/filter");

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



