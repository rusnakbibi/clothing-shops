import { useContext } from 'react';

import { CartContext } from '../../context';

import { ButtonComponent } from '../Button';

import { ProductCardContainer, Footer } from './ProductCard.styles.jsx';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

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
