import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

//memoized selector
export const selectCategories = createSelector(
  // input selector
  [selectCategoryReducer],
  // output selector
  (catgoriesSlice) => catgoriesSlice.categories
);

// memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
