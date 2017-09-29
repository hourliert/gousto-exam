import { createStructuredSelector } from 'reselect';

import { getCategories, getSelectedCategory } from '../selectors';

export default createStructuredSelector({
  categories: getCategories,
  selectedCategory: getSelectedCategory,
});
