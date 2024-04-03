import { CartItemType } from 'types/cart';

import { CartItemContainer, ItemDetails, Name } from './CartItem.styles';

type CartItemData = {
  cartItem: CartItemType;
};

const CartItem = ({ cartItem }: CartItemData) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
