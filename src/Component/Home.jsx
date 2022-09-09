import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    searchField: '',
    products: [],
    searchPerformed: false,
    categorie: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categorie: categories });
  }

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
    const { categorie, products, searchPerformed } = this.state;
    return (
      <div>
        <section>
          <ul>
            {categorie.map(({ name, id }) => (
              <li key={ id }>
                <label htmlFor="categorie">
                  <input type="radio" id="categorie" data-testid="category" />
                  { name }
                </label>
              </li>))}
          </ul>
        </section>
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
