import { fromJS } from 'immutable';
import { reducerFactory } from 'redux-rac-utils';
import { FULFILLED } from 'redux-promise-middleware';

import { PRODUCT } from "./actions";

import { FETCH, formatApiEntities } from '../shared';

function getInitialState() {
  return fromJS({
    value: {},
    selected: null,
  });
}

export default reducerFactory(getInitialState(), {
  [`${FETCH}_${PRODUCT}_${FULFILLED}`](state, action) {
    const { data } = action.payload.data;

    return state.mergeIn(['value'], formatApiEntities(data));
  },

  [`SELECT_${PRODUCT}`](state, action) {
    const { id } = action.payload;

    return state.setIn(['selected'], id);
  }
});
