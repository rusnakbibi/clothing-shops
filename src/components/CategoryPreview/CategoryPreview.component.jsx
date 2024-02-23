import { toTitleCase } from 'utils/titleCase';

import ProductCard from '../ProductCard/ProductCard.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './CategoryPreview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{toTitleCase(title)}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
