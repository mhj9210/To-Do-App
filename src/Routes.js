import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Create from "./Create";
import Single from "./Single";
import Update from "./Update";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Create} />
        <Route path="/:id" exact component={Single} />
        <Route path="/update/:id" exact component={Update} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
