import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Cart from './Component/Cart';
import Description from './Component/Description';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  state = {
    cart: [],
  };

  addCart = async ({ target }) => {
    const id = target.getAttribute('id');
    const thumbnail = target.getAttribute('thumbnail');
    const title = target.getAttribute('title');
    const price = target.getAttribute('price');
    const quantity = target.getAttribute('quantity');
    const product = [{
      title,
      thumbnail,
      price,
      quantity,
      id,
    }];
    await this.setState((beforeState) => ({
      cart: beforeState.cart.concat(product),
    }));
    const { cart } = this.state;
    localStorage.setItem('Cart', JSON.stringify(cart));
  };

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home addCart={ this.addCart } /> } />
          <Route path="/Cart" render={ () => <Cart cart={ cart } /> } />
          <Route path="/description/:id" component={ Description } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
