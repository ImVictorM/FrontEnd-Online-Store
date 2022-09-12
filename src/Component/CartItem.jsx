import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  state = {
    quantity: 1,
  };

  decrement = () => {
    const { quantity } = this.state;
    if (quantity !== 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    }
  };

  increment = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  removeItem = ({ target }) => {
    target.parentElement.remove();
    const { id } = target;
    const items = JSON.parse(localStorage.getItem('Cart'));
    const filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem('Cart', JSON.stringify(filteredItems));
  };

  render() {
    const { title, thumbnail, price, id } = this.props;
    const { quantity } = this.state;
    return (
      <li>
        <p
          data-testid="shopping-cart-product-name"
        >
          { title }
        </p>
        <img src={ thumbnail } alt="Thumbnail" />
        <p>
          Valor:
          {' '}
          { price }
        </p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.increment }
        >
          +
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.decrement }
        >
          -
        </button>
        <button
          id={ id }
          type="button"
          data-testid="remove-product"
          onClick={ this.removeItem }
        >
          Remover
        </button>
      </li>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
