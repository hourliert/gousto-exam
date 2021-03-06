import { actionsCreatorFactory } from 'redux-rac-utils';
import axios from 'axios';

import { API_CATEGORIES_ROUTE } from '../../config';
import { FETCH } from '../shared';

export const CATEGORY = 'CATEGORY';

export const fetchCategories = actionsCreatorFactory(
  `${FETCH}_${CATEGORY}`,
  () => axios.get(API_CATEGORIES_ROUTE)
    .then(r => r.data),
);

export const selectCategory = actionsCreatorFactory(`SELECT_${CATEGORY}`);
