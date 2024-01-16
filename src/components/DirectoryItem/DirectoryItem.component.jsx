import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './DirectoryItem.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
