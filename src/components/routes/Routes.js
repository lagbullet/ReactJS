import React from 'react';
import Home from '../home';
import NotFound from '../not-found';
import SignIn from '../sign-in';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-in" exact component={SignIn} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
