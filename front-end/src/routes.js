import React from "react";
import Login from "./components/Login";
import { Switch, Route, Redirect } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/adwaith" render={() => <p>hello</p>} />
    </Switch>
  );
}
