import productReducer from './reducers';

function testReducer(testSet) {
  testSet.forEach((t) => {
    const newState = productReducer(undefined, t.input);

    expect(newState.toJS()).toEqual(t.output);
  });
}

describe('productsReducer', () => {
  it('creates the product reducer without initialState', () => {
    const newState = productReducer(undefined);
    expect(newState).toBeDefined();
  });

  it('selects a product', () => {
    const tests = [
      {
        input: {
          type: 'SELECT_PRODUCT',
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

  // I have chosen to test the reducer and the inner function `formatApiEntities` here.
  // Mocking `formatApiEntities` would have lead to a useless test: testing Immutable.mergeIn.
  it('retrieves the product list', () => {
    const tests = [
      {
        input: {
          type: 'FETCH_PRODUCT_FULFILLED',
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
