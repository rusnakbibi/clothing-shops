import { DirectoryItem } from '../DirectoryItem';

import { DirectoryContainer } from './Directory.styles.jsx';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
