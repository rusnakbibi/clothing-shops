import { UnknownAction } from 'redux';

import { CartState } from 'types/cart';
import { setIsCartOpen, setCartItems } from 'actions/cart';

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalPrice: 0,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: UnknownAction
): CartState => {
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }

  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  return state;
};
