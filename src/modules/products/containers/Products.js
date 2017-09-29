import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Selector from './ProductsSelector';
import { fetchProducts, selectProduct } from '../actions';
import { ProductItem, SearchProductForm, productShape } from '../components';

import { List } from '../../shared';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProducts,
    selectProduct,
  }, dispatch);
}

class Products extends PureComponent {
  static propTypes = {
    selectedProduct: productShape,
    products: PropTypes.arrayOf(productShape),

    selectProduct: PropTypes.func,
    fetchProducts: PropTypes.func,
  };

  constructor(...args) {
    super(...args);

    this._searchProducts = this._searchProducts.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  /**
   * We don't need to use this callback. Search is done in ../selectors.js
   *
   * This would have been useful if search was made on the backend side
   */
  _searchProducts() {}

  render() {
    const { selectedProduct, products } = this.props;

    return (
      <div>
        <List
          title="Products"
          header={
            <SearchProductForm
              label="Search for a product"
              onSubmit={this._searchProducts}
            />
          }
          layout="vertical"
          items={products}
          activeItem={selectedProduct}
          itemRenderer={
            <ProductItem
              onSelectItem={this.props.selectProduct}
            />
          }
        />
      </div>
    );
  }
}

export default connect(Selector, mapDispatchToProps)(Products);
