import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home/Home';
import NotFound from '../containers/NotFound/NotFound';


const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
