import { createTextSpanFromBounds } from "typescript";
import { CategoryItem } from "../categories/categories.types";


export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_COUNT = "cart/SET_TOTAL_COUNT",
  SET_CART_TOTAL = "cart/SET_TOTAL_CART",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
