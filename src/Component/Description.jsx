import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { title, thumbnail, price } = currentProduct;
    console.log(currentProduct);
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt="product"
        />
        <p data-testid="product-detail-price">{price}</p>
      </div>
    );
  }
}

Description.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
