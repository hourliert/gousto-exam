import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';

import { reducer as categories } from './categories';
import { reducer as products } from './products';

export default combineReducers({
  categories,
  products,
  routing: routerReducer,
  form: formReducer,
});
