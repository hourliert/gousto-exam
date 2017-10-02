import { fromJS } from 'immutable';

import * as productSelectors from './selectors';

jest.mock('../categories', () => ({
  getSelectedCategoryId: jest.fn(() => '2'),
}));
jest.mock('redux-form/immutable', () => ({
  getFormValues: jest.fn(() => jest.fn(() => {
    const Immutable = require('immutable');

    return Immutable.fromJS({
      search: 'May',
    });
  })),
}));

const initialRawState = {
  value: {
    '1234': { id: '1234', title: 'Soup', description: '', categories: [{ id: '1', title: 'Liquid'}] },
    '4567': { id: '4567', title: 'Ketchup', description: 'May be good', categories: [{ id: '2', title: 'Sauce'}] },
    '6789': { id: '6789', title: 'Mayo', description: '', categories: [{ id: '2', title: 'Sauce'}] },
    '9023': { id: '9023', title: 'Mustard', description: '', categories: [{ id: '2', title: 'Sauce'}] },
  },
  selected: '1234',
};

function getInitialState() {
  return {
    products: fromJS(initialRawState),
  };
}

describe('productSelectors', () => {
  it('retrieves the products value', () => {
    const state = getInitialState();

    const value = productSelectors.getProductsValue(state);

    expect(value.toJS()).toEqual(initialRawState.value);
  });

  it('retrieves the products value as a list', () => {
    const state = getInitialState();

    const value = productSelectors.getProductsValueList(state);

    expect(value.toJS()).toEqual(Object.values(initialRawState.value));
  });

  it('retrieves the selected product id', () => {
    const state = getInitialState();

    const id = productSelectors.getSelectedProductId(state);

    expect(id).toEqual(initialRawState.selected);
  });

  it('retrieves the selected product', () => {
    const state = getInitialState();

    const product = productSelectors.getSelectedProductValue(state);

    expect(product.toJS()).toEqual(initialRawState.value[initialRawState.selected]);
  });

  it('retrieves the selected product as raw JS', () => {
    const state = getInitialState();

    const product = productSelectors.getSelectedProduct(state);

    expect(product).toEqual(initialRawState.value[initialRawState.selected]);
  });

  it('retrieves the products for the selected category (id: 2)', () => {
    const state = getInitialState();

    const products = productSelectors.getSelectedCategoryProductsValue(state);

    expect(products.toJS()).toEqual({
      '4567': initialRawState.value['4567'],
      '6789': initialRawState.value['6789'],
      '9023': initialRawState.value['9023'],
    });
  });

  it('retrieves the filtered products', () => {
    const state = getInitialState();

    const products = productSelectors.getFilteredProductsValue(state);

    expect(products.toJS()).toEqual({
      '4567': initialRawState.value['4567'],
      '6789': initialRawState.value['6789'],
    });
  });
});
