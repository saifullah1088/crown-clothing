import {  CartItem } from "./cart.types";
import { setCartItems, setIsCartOpen } from "./cart.actions";
import { Action as ReduxAction } from "redux";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: ReduxAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
