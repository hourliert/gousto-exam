import { actionsCreatorFactory } from 'redux-rac-utils';
import axios from 'axios';

import { API_CATEGORIES_ROUTE } from '../../config';
import { FETCH } from '../shared';

export const CATEGORY = 'CATEGORY';

function fetchCategories() {
  return axios.get(API_CATEGORIES_ROUTE);
}

export const getCategories = actionsCreatorFactory(
  `${FETCH}_${CATEGORY}`,
  fetchCategories
);

export const selectCategory = actionsCreatorFactory(`SELECT_${CATEGORY}`);
