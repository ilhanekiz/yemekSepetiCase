import React, { Component } from 'react';
import './App.scss';

import RestaurantDetail from './container/RestaurantDetail/restaurantDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends Component {
 render() {
  return(
    <Router>
        <Switch>
          <Route path="/">
            <RestaurantDetail />
          </Route>
        </Switch>
    </Router>
  );
 }
}
export default App