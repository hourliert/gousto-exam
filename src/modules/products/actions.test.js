import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';

import * as productsActions from './actions';
import { API_PRODUCTS_ROUTE } from '../../config';

const middlewares = [promiseMiddleware()];
const mockStore = configureStore(middlewares);

describe('productsActions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates a select product action', () => {
    const action = productsActions.selectProduct('1234');

    expect(action).toEqual({
      type: 'SELECT_PRODUCT',
      payload: '1234',
    });
  });

  it('creates a fetch products action', (done) => {
    moxios.stubRequest(API_PRODUCTS_ROUTE, {
      status: 200,
      responseText: {
        data: [
          { id: 1, title: 'Vegies' },
          { id: 2, title: 'Drinks' },
        ],
      },
    });
    const store = mockStore({});

    const action = productsActions.getProducts();

    expect(action.type).toEqual('FETCH_PRODUCT');
    expect(action.payload).toBeInstanceOf(Promise);

    store.dispatch(action);

    setTimeout(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: 'FETCH_PRODUCT_PENDING' });
      expect(actions[1]).toEqual({
        type: 'FETCH_PRODUCT_FULFILLED',
        payload: {
          data: [
            { id: 1, title: 'Vegies' },
            { id: 2, title: 'Drinks' },
          ],
        },
      });
      done();
    }, 0);
  });
});
