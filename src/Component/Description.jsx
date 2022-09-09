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
    console.log(currentProduct);
    return (
      <div />
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
