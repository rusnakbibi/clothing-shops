import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context';

import { ButtonComponent } from '../Button';

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles.jsx';

import CartItem from '../CartItem/CartItem.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
      </Link>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
