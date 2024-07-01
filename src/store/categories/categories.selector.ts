import { createSelector } from "reselect";
import { CategoriesState } from "./categories.reducers";
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

// memoized selector
export const selectCategories = createSelector(
  // input selector
  [selectCategoryReducer],
  // output selector
  (categoriesSlice) => categoriesSlice.categories
);

// memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
