import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantDetail from './container/RestaurantDetail/restaurantDetail';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <RestaurantDetail />
      </Route>
    </Switch>
  </Router>
);

export default App;
