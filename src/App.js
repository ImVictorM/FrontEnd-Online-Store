import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
