import { ActionWithPayload } from './createAction';
import { CategoryItem } from './category';
import { CART_ACTION_TYPES } from 'enum/cartActionTypes';

export type CartItemType = CategoryItem & {
  quantity: number;
};

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItemType[],
  readonly itemsQuantity: number;
  readonly totalPrice: number;
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItemType[]>;