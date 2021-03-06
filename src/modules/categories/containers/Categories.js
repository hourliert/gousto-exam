import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Selector from './CategoriesSelector';
import { fetchCategories, selectCategory } from '../actions';
import { CategoryItem, categoryShape } from '../components';

import { List } from '../../shared';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCategories,
    selectCategory
  }, dispatch);
}

class Categories extends PureComponent {
  static propTypes = {
    categories: PropTypes.array,
    selectedCategory: categoryShape,

    selectCategory: PropTypes.func,
    fetchCategories: PropTypes.func,
  };

  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <List
        title="Categories"
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
