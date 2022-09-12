import React from 'react';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('Cart'));
    return (
      <div>
        {cart.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          <ul>
            {cart.map(({ id, title, thumbnail, price }) => (
              <CartItem
                key={ id }
                id={ id }
                title={ title }
                thumbnail={ thumbnail }
                price={ price }
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
