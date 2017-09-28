import { fromJS } from 'immutable';
import { reducerFactory } from 'redux-rac-utils';

function getInitialState() {
  return fromJS({});
}

export default reducerFactory(getInitialState(), {

});
