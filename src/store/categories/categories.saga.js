import { takeLatest, call, all, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSucess,
  fetchCategoriesFailed,
} from "./categories.actions";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(
      getCategoriesAndDocuments(),
      "categories"
    );
    yield put(fetchCategoriesSucess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategoriesSaga() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategoriesSaga)]);
}
