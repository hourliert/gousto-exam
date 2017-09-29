/**
 * This test is a perfect copy of ../products/actions.test.js
 * If I had more time I would have use this library https://github.com/redux-observable/redux-observable
 * that is an abstraction of crud action creators. This library is written by me an fully tested.
 */

import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';

import * as categoriesActions from './actions';
import { API_CATEGORIES_ROUTE } from '../../config';

const middlewares = [promiseMiddleware()];
const mockStore = configureStore(middlewares);

describe('categoriesActions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates a select category action', () => {
    const action = categoriesActions.selectCategory('1234');

    expect(action).toEqual({
      type: 'SELECT_CATEGORY',
      payload: '1234',
    });
  });

  it('creates a fetch categories action', (done) => {
    moxios.stubRequest(API_CATEGORIES_ROUTE, {
      status: 200,
      responseText: {
        data: [
          { id: 1, title: 'Vegies' },
          { id: 2, title: 'Drinks' },
        ],
      },
    });
    const store = mockStore({});

    const action = categoriesActions.getCategories();

    expect(action.type).toEqual('FETCH_CATEGORY');
    expect(action.payload).toBeInstanceOf(Promise);

    store.dispatch(action);

    setTimeout(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: 'FETCH_CATEGORY_PENDING' });
      expect(actions[1]).toEqual({
        type: 'FETCH_CATEGORY_FULFILLED',
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
