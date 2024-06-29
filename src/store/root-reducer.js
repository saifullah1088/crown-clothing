import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducers";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
