import { actionsCreatorFactory } from 'redux-rac-utils';
import axios from 'axios';

import { API_PRODUCTS_ROUTE } from '../../config';
import { FETCH } from '../shared';

export const PRODUCT = 'PRODUCT';

function fetchProducts() {
  return axios.get(API_PRODUCTS_ROUTE);
}

export const getProducts = actionsCreatorFactory(
  `${FETCH}_${PRODUCT}`,
  fetchProducts
);

export const selectProduct = actionsCreatorFactory(`SELECT_${PRODUCT}`);
