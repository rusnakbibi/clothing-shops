import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsCartOpen,
  selectCartCount,
  setIsCartOpen,
} from '../../store/reducers';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './CartIcon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const itemsCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
