import { createAction, withMatcher } from 'utils/reducer';

import { CART_ACTION_TYPES } from 'enum/cartActionTypes';
import {
  CartItemType,
  SetCartItems,
  SetIsCartOpen,
  CategoryItem
} from 'types/index';

const addCartItem = (cartItems: CartItemType[], productToAdd: CategoryItem): CartItemType[] => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartITems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItemType[], productToRemove: CartItemType): CartItemType[] => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItemType[], cartItemToClear: CartItemType): CartItemType[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setCartItems = withMatcher((cartItems: CartItemType[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const setIsCartOpen = withMatcher((isCartOpen: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen));

export const addItemToCart = (cartItems: CartItemType[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItemType[], cartItemToRemove: CartItemType) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItemType[], cartItemToClear: CartItemType) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
}

