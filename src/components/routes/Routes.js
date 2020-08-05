import React from 'react';
import Home from '../home';
import NotFound from '../not-found';
import SignIn from '../sign-in';
import Settings from '../settings';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SingleCard from '../card-list/card/SingleCard';

const Routes = ({ isAdmin }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-in" exact component={SignIn} />
    {isAdmin && <Route path="/settings" exact component={Settings} />}
    <Route path="/card/:id" component={SingleCard} />
    <Route path="*" component={NotFound} />
  </Switch>
);

const mapStateToProps = (state) => ({
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps, null)(Routes);
