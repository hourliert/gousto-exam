import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import 'rxjs';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore';
import getRoutes from './routes';

import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {getRoutes()}
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
