import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';

import { reducer as rootReducer } from './modules';

export default function configureStore(history) {
  const middlewares = [routerMiddleware(history), promiseMiddleware()];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}
