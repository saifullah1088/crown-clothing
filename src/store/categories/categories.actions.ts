import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, CategoryItem } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Category } from "./categories.types";
import { ThunkAction } from "redux-thunk";
import { Action as ReduxAction } from "redux";
import { RootReducerType } from "./categories.types";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

export const fetchCategoriesAsync = (): ThunkAction<
  void,
  RootReducerType,
  unknown,
  ReduxAction<string>
> => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      const transformedCategoriesArray: Category[] = categoriesArray.map(
        (doc) => ({
          title: doc.title,
          imageUrl: doc.imageUrl,
          items: doc.items.map((item: CategoryItem) => ({
            id: item.id,
            imageUrl: item.imageUrl,
            name: item.name,
            price: item.price,
          })),
        })
      );
      dispatch(fetchCategoriesSuccess(transformedCategoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error as Error));
    }
  };
};
