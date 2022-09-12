import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Description extends Component {
  state = {
    currentProduct: {},
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const product = await getProductById(id);
    this.setState({ currentProduct: { ...product } });
  }

  render() {
    const { currentProduct } = this.state;
    const { addCart } = this.props;
    const { title, thumbnail, price, id } = currentProduct;
    return (
      <section>
        <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img
            data-testid="product-detail-image"
            src={ thumbnail }
            alt="product"
          />
          <p data-testid="product-detail-price">{price}</p>
          <button
            title={ title }
            id={ id }
            thumbnail={ thumbnail }
            quantity={ 1 }
            price={ price }
            type="button"
            onClick={ addCart }
          >
            Adicionar ao carrinho

          </button>
        </div>
      </section>
    );
  }
}

Description.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};
