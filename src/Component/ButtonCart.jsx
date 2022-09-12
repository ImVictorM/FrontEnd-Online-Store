import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ButtonCart extends Component {
  render() {
    const { addCart, title, id, thumbnail, quantity, price } = this.props;
    return (
      <button
        title={ title }
        id={ id }
        thumbnail={ thumbnail }
        quantity={ quantity }
        price={ price }
        type="button"
        data-testid="product-add-to-cart"
        onClick={ addCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

ButtonCart.propTypes = {
  addCart: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  thumbnail: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  quantity: propTypes.number.isRequired,
};
