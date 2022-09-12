import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          <ul>
            {cart.map(({ id, title, thumbnail, price, quantity }) => (
              <li key={ id }>
                {console.log(title)}
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
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  { quantity }
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.string,
  })).isRequired,
};
