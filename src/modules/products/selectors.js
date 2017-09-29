import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form/immutable';

import { SEARCH_PRODUCTS, SEARCH_PRODUCTS_FIELDS } from './forms';

import { getSelectedCategoryId } from '../categories';

function getProductsState(state) {
  return state.products;
}

export const getProductsValue = createSelector(
  getProductsState,
  (state) => state.get('value'),
);

export const getProductsValueList = createSelector(
  getProductsValue,
  (products) => products.toList(),
);

export const getProducts = createSelector(
  getProductsValueList,
  (productsList) => productsList.toJS(),
);

export const getSelectedProductId = createSelector(
  getProductsState,
  (state) => state.get('selected'),
);

export const getSelectedProductValue = createSelector(
  getSelectedProductId, getProductsValue,
  (id, products) => products.get(id),
);

export const getSelectedProduct = createSelector(
  getSelectedProductValue,
  (product) => product && product.toJS(),
);

export const getSelectedCategoryProductsValue = createSelector(
  getSelectedCategoryId, getProductsValue,
  (categoryId, products) =>
    categoryId === null ?
      products :
      products.filter(p =>
        p.get('categories')
          .map(c => c.get('id'))
          .includes(categoryId)
      ),
);

export const getSelectedCategoryProductsList = createSelector(
  getSelectedCategoryProductsValue,
  (products) => products.toList(),
);

export const getSelectedCategoryProducts = createSelector(
  getSelectedCategoryProductsList,
  (productsList) => productsList.toJS(),
);

export const getSearchProductsFormValue = getFormValues(SEARCH_PRODUCTS);

export const getFilteredProductsValue = createSelector(
  getSelectedCategoryProductsValue, getSearchProductsFormValue,
  (products, form) => {
    const search = form && form.get(SEARCH_PRODUCTS_FIELDS.search);

    if (search && search.length > 0) {
      return products.filter(p =>
        p.get('title').includes(search) || p.get('description').includes(search)
      );
    }

    return products;
  },
);

export const getFilteredProductsList = createSelector(
  getFilteredProductsValue,
  (products) => products.toList(),
);

export const getFilteredProducts = createSelector(
  getFilteredProductsList,
  (productsList) => productsList.toJS(),
);

