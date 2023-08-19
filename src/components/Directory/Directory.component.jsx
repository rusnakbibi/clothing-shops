import { CategoryItem } from '../CategoryItem';

import './Directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Directory;
