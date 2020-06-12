import React from "react";
import { Switch, Route } from "react-router-dom";
import Activities from "./Activities";
import Materials from "./Materials";
import Dashboard from "./Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/materials" exact component={Materials} />
      <Route path="/activities" exact component={Activities} />
    </Switch>
  );
}
