import { createSelector } from 'reselect';

function getCategoriesState(state) {
  return state.categories;
}

export const getCategoriesValue = createSelector(
  getCategoriesState,
  (state) => state.get('value'),
);

export const getCategoriesValueList = createSelector(
  getCategoriesValue,
  (categories) => categories.toList(),
);

export const getCategories = createSelector(
  getCategoriesValueList,
  (categoriesList) => categoriesList.toJS(),
);

export const getSelectedCategoryId = createSelector(
  getCategoriesState,
  (state) => state.get('selected'),
);

export const getSelectedCategoryValue = createSelector(
  getSelectedCategoryId, getCategoriesValue,
  (id, categories) => categories.get(id),
);

export const getSelectedCategory = createSelector(
  getSelectedCategoryValue,
  (category) => category && category.toJS(),
);
