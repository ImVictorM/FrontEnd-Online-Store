import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  state = {
    searchField: '',
    products: [],
    searchPerformed: false,
  };

  changeHandle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  searchByQuery = async () => {
    const { searchField } = this.state;
    const response = await getProductsFromCategoryAndQuery(null, searchField);
    const products = response.results;
    this.setState({
      products: [...products],
      searchPerformed: true,
    });
  };

  render() {
    const { products, searchPerformed } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/Cart">Cart</Link>
        <input
          name="searchField"
          type="text"
          data-testid="query-input"
          onChange={ this.changeHandle }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchByQuery }
        >
          Buscar
        </button>

        {
          searchPerformed && (
            <section>
              {
                products.length !== 0
                  ? (
                    products.map((item) => {
                      const { id, title, price, thumbnail } = item;
                      return (
                        <div key={ id } data-testid="product">
                          <p>{title}</p>
                          <img src={ thumbnail } alt="produto" />
                          <p>{price}</p>
                        </div>
                      );
                    })
                  ) : (
                    <p>Nenhum produto foi encontrado</p>
                  )
              }
            </section>
          )
        }

      </div>
    );
  }
}

export default Home;
