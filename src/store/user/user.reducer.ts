import { USER_ACTION_TYPES } from "./user.types";

interface UserState {
  currentUser: any | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: any
): UserState => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
