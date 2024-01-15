import { useContext } from 'react';

import { CartContext } from '../../context';

import { ButtonComponent } from '../Button';

import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
