import { createContext, useReducer } from 'react';
import { createAction } from '../utils';

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_ITEMS_QUANTITY: 'SET_ITEMS_QUANTITY',
  SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemsQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in the cartReducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  itemsQuantity: 0,
  setItemsQuantity: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, itemsQuantity, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (cartItems) => {
    const newItemsQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotalPrice = cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      itemsQuantity: newItemsQuantity,
      totalPrice: newTotalPrice,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newItemsCart = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newItemsCart);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newItemsCart = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newItemsCart);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newItemsCart = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newItemsCart);
  };

  const setIsCartOpen = (value) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, value));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    itemsQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
