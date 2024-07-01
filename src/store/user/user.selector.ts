import { RootReducerType } from "../categories/categories.types";
export const selectCurrentUser = (state: RootReducerType) =>
  state.user.currentUser;
