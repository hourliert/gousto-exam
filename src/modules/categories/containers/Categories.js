import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Selector from './CategoriesSelector';
import { getCategories, selectCategory } from '../actions';
import { CategoryItem, categoryShape } from '../components';

import { List } from '../../shared';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories,
    selectCategory
  }, dispatch);
}

class Categories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    selectedCategory: categoryShape,

    selectCategory: PropTypes.func,
    getCategories: PropTypes.func,
  };

  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <List
        layout="horizontal"
        items={categories}
        activeItem={selectedCategory}
        itemRenderer={
          <CategoryItem
            onSelectItem={this.props.selectCategory}
          />
        }
      />
    );
  }
}

export default connect(Selector, mapDispatchToProps)(Categories);
