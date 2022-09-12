import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ButtonCart from './ButtonCart';

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

  searchByQuery = async ({ target }) => {
    const { type } = target;

    let response = null;

    if (type === 'radio') {
      response = await getProductsFromCategoryAndQuery(target.id);
    } else {
      const { searchField } = this.state;
      response = await getProductsFromCategoryAndQuery(null, searchField);
    }
    const products = response.results;
    this.setState({
      products: [...products],
      searchPerformed: true,
    });
  };

  render() {
    const { addCart } = this.props;
    const { categorie, products, searchPerformed } = this.state;
    return (
      <div>
        <section>
          <ul>
            {categorie.map(({ name, id }) => (
              <li key={ id }>
                <label htmlFor={ id }>
                  <input
                    type="radio"
                    id={ id }
                    name="categoria"
                    data-testid="category"
                    onClick={ this.searchByQuery }
                  />
                  {name}
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
                      const {
                        id,
                        title,
                        price,
                        thumbnail,
                      } = item;
                      const quantity = 1;
                      return (
                        <div
                          id={ id }
                          quantity={ quantity }
                          key={ id }
                          data-testid="product"
                        >
                          <p>{title}</p>
                          <img src={ thumbnail } alt="produto" />
                          <p>{price}</p>
                          <ButtonCart
                            title={ title }
                            id={ id }
                            thumbnail={ thumbnail }
                            quantity={ quantity }
                            price={ price }
                            addCart={ addCart }
                          />
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
Home.propTypes = {
  addCart: propTypes.func.isRequired,
};

export default Home;
