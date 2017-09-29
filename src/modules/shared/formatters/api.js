import { fromJS } from 'immutable';

/**
 * Index an array of entity by their id
 */
export function formatApiEntities(list) {
  return list.reduce((res, cur) => {
    return res.merge({
      [cur.id]: cur,
    })
  }, fromJS({}));
}
