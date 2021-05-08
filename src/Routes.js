import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import App from "./App";

const Routes = () => {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default Routes;
