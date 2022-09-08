import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Cart from './Component/Cart';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
