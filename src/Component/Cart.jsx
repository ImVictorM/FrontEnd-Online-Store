import React from 'react';

export default class ShoppingCart extends React.Component {
  state = {
    carrinho: [],
  };

  render() {
    const { carrinho } = this.state;
    return (
      <div>
        {carrinho.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          <ol>
            {carrinho.map((item, index) => <li key={ index }>{ item }</li>)}
          </ol>
        )}
      </div>
    );
  }
}
