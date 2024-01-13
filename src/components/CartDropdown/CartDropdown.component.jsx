import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context';

import './CartDropdown.styles.scss';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
