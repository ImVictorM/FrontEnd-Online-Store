import React, { Component } from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  render() {
    getCategories();
    getProductsFromCategoryAndQuery();
    return (
      <div />
    );
  }
}

export default App;
