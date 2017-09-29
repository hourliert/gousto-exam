import { createStructuredSelector } from 'reselect';

import { getSelectedProduct, getFilteredProducts } from '../selectors';

export default createStructuredSelector({
  selectedProduct: getSelectedProduct,
  products: getFilteredProducts,
});
