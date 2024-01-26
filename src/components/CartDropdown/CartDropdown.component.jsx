import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsCartOpen, selectCartItems } from '../../store/reducers';

import { ButtonComponent } from '../Button';

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles.jsx';

import CartItem from '../CartItem/CartItem.component';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const onClickHandler = () => {
    dispatch(setIsCartOpen(false));
  };

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
        <ButtonComponent onClick={onClickHandler}>
          GO TO CHECKOUT
        </ButtonComponent>
      </Link>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
