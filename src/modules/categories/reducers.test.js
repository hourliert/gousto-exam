/**
 * This test is a perfect copy of ../products/reducer.test.js
 * If I had more time I would have use my own library https://github.com/redux-observable/redux-observable
 * that is an abstraction of basic reducers (and other things) like this one.
 */

import categoriesReducer from './reducers';

function testReducer(testSet) {
  testSet.forEach((t) => {
    const newState = categoriesReducer(undefined, t.input);

    expect(newState.toJS()).toEqual(t.output);
  });
}

describe('categoriessReducer', () => {
  it('creates the categories reducer without initialState', () => {
    const newState = categoriesReducer(undefined);
    expect(newState).toBeDefined();
  });

  it('selects a category', () => {
    const tests = [
      {
        input: {
          type: 'SELECT_CATEGORY',
          payload: {
            id: '1234',
          },
        },
        output: {
          selected: '1234',
          value: {},
        }
      },
    ];

    testReducer(tests);
  });

  it('retrieves the categories list', () => {
    const tests = [
      {
        input: {
          type: 'FETCH_CATEGORY_FULFILLED',
          payload: {
            data: [
              { id: 1, title: 'Product 1'},
              { id: 2, title: 'Product 2'},
              { id: 3, title: 'Product 3'},
              { id: 4, title: 'Product 4'},
            ]
          },
        },
        output: {
          selected: null,
          value: {
            1: {id: 1, title: 'Product 1'},
            2: {id: 2, title: 'Product 2'},
            3: {id: 3, title: 'Product 3'},
            4: {id: 4, title: 'Product 4'},
          },
        }
      },
    ];

    testReducer(tests);
  });
});
