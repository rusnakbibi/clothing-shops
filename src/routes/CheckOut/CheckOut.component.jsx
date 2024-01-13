import { useContext } from 'react';

import { CartContext } from '../../context';

import { CheckoutItem } from '../../components';

import './CheckOut.styles.scss';

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div>
      return (
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">TOTAL: ${totalPrice}</div>
      </div>
      );
    </div>
  );
};

export default CheckOut;
