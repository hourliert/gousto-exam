import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Selector from './ProductsSelector';
import { getProducts, selectProduct } from '../actions';
import { ProductItem, SearchProductForm, productShape } from '../components';

import { List } from '../../shared';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts,
    selectProduct,
  }, dispatch);
}

class Products extends PureComponent {
  static propTypes = {
    selectedProduct: productShape,
    products: PropTypes.arrayOf(productShape),

    selectProduct: PropTypes.func,
    getProducts: PropTypes.func,
  };

  constructor(...args) {
    super(...args);

    this._searchProducts = this._searchProducts.bind(this);
  }

  componentWillMount() {
    this.props.getProducts();
  }

  _searchProducts(form) {
    console.log(form.toJS());
  }

  render() {
    const { selectedProduct, products } = this.props;

    return (
      <div>
        <SearchProductForm
          onSubmit={this._searchProducts}
        />
        <List
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
