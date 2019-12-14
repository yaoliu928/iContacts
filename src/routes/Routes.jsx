import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import AddContactForm from '../components/pages/AddContactForm';
import NotMatch from '../components/NotMatch';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/add' component={AddContactForm} />
    <Route  component={NotMatch} />
  </Switch>
)