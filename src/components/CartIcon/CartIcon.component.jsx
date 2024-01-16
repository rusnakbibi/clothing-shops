import { useContext } from 'react';

import { CartContext } from '../../context';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './CartIcon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsQuantity } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemsQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
