import { fromJS } from 'immutable';
import { reducerFactory } from 'redux-rac-utils';
import { FULFILLED } from 'redux-promise-middleware';

import { CATEGORY } from "./actions";

import { FETCH, formatApiEntities } from '../shared';

function getInitialState() {
  return fromJS({
    value: {},
    selected: null,
  });
}

export default reducerFactory(getInitialState(), {
  [`${FETCH}_${CATEGORY}_${FULFILLED}`](state, action) {
    const { data } = action.payload.data;

    return state.mergeIn(['value'], formatApiEntities(data));
  },

  [`SELECT_${CATEGORY}`](state, action) {
    const { id } = action.payload;

    return state.setIn(['selected'], id);
  }
});
