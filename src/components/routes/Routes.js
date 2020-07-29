import React from 'react';
import Home from '../home';
import NotFound from '../not-found';
import SignIn from '../sign-in';
import { Switch, Route } from 'react-router-dom';
import SingleCard from '../card-list/card/SingleCard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-in" exact component={SignIn} />
    <Route path="/card/:id" component={SingleCard} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
