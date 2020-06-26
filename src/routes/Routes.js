import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { News } from "../pages/News";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Register } from "../authentication/pages/Register";
import { Login } from "../authentication/pages/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
