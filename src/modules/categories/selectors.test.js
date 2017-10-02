/**
 * This test is a copy of ../products/selectors.test.js
 * If I had more time I would have use this library https://github.com/redux-observable/redux-observable
 * that is an abstraction of crud action creators. This library is written by me an fully tested.
 */

import { fromJS } from 'immutable';

import * as categorySelectors from './selectors';

const initialRawState = {
  value: {
    '1234': { id: '1234', title: 'Liquid' },
    '4567': { id: '4567', title: 'Sauce' },
  },
  selected: '1234',
};

function getInitialState() {
  return {
    categories: fromJS(initialRawState),
  };
}

describe('categorySelectors', () => {
  it('retrieves the categories value', () => {
    const state = getInitialState();

    const value = categorySelectors.getCategoriesValue(state);

    expect(value.toJS()).toEqual(initialRawState.value);
  });

  it('retrieves the categories value as a list', () => {
    const state = getInitialState();

    const value = categorySelectors.getCategoriesValueList(state);

    expect(value.toJS()).toEqual(Object.values(initialRawState.value));
  });

  it('retrieves the selected category id', () => {
    const state = getInitialState();

    const id = categorySelectors.getSelectedCategoryId(state);

    expect(id).toEqual(initialRawState.selected);
  });

  it('retrieves the selected category', () => {
    const state = getInitialState();

    const category = categorySelectors.getSelectedCategoryValue(state);

    expect(category.toJS()).toEqual(initialRawState.value[initialRawState.selected]);
  });

  it('retrieves the selected category as raw JS', () => {
    const state = getInitialState();

    const category = categorySelectors.getSelectedCategory(state);

    expect(category).toEqual(initialRawState.value[initialRawState.selected]);
  });
});
