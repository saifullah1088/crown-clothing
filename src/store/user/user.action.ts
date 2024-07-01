import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { transformUser } from "./user.utils";
import { UserData } from "../../utils/firebase/firebase.utils";

export const setCurrentUser = withMatcher((user: UserData) => {
  const transformedUser = transformUser(user);
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, transformedUser);
});
