import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantDetail from './container/RestaurantDetail/restaurantDetail';
import Header from './components/Header/Header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/">
        <RestaurantDetail />
      </Route>
    </Switch>
  </Router>
);

export default App;
