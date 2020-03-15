import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Favorite from "../routes/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorite" component={Favorite} />
    </Switch>
  );
};

export default Routes;
