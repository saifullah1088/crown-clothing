import { Action as ReduxAction } from "redux";

type Matchable<AC extends () => ReduxAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: ReduxAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => ReduxAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => ReduxAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: ReduxAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
  payload: void;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(type: T, payload?: P) {
  if (payload === undefined) {
    return { type };
  }
  return { type, payload };
}
