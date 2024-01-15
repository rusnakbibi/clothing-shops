import { toTitleCase } from '../../utils';

import ProductCard from '../ProductCard/ProductCard.component';

import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{toTitleCase(title)}</span>
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </h2>
    </div>
  );
};

export default CategoryPreview;
