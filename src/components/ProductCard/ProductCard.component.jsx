import { ButtonComponent } from '../Button';

import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <ButtonComponent buttonType="inverted">Add to card</ButtonComponent>
    </div>
  );
};

export default ProductCard;
