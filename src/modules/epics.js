import { combineEpics } from 'redux-observable';

import { epic as categoriesEpic } from './categories';
import { epic as productsEpic } from './products';

export default combineEpics(categoriesEpic, productsEpic);
