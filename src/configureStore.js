import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducer as rootReducer, epic as rootEpic } from './modules';

export default function configureStore(history) {
  const middlewares = [routerMiddleware(history), createEpicMiddleware(rootEpic)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
}
