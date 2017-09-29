import { fromJS } from 'immutable';

export function formatApiEntities(list) {
  return list.reduce((res, cur) => {
    return res.merge({
      [cur.id]: cur,
    })
  }, fromJS({}));
}
