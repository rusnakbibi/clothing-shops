import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from 'selectors/cart';
import { addItemToCart } from 'actions/cart';

import { ButtonComponent } from '../Button';

import { ProductCardContainer, Footer } from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </Footer>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </ButtonComponent>
    </ProductCardContainer>
  );
};

export default ProductCard;
