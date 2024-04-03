import { useNavigate } from 'react-router-dom';

import { DirectoryItemType } from 'types/category';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './DirectoryItem.styles';

type DirectoryItemData = {
  category: DirectoryItemType;
};

const DirectoryItem = ({ category }: DirectoryItemData) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageurl={imageUrl} />
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
