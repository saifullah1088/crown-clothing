import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { transformUser } from "./user.utils";

export const setCurrentUser = (user) => {
  const transformedUser = transformUser(user);
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, transformedUser);
};
