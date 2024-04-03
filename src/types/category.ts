import { Action, ActionWithPayload } from './createAction';
import { CATEGORIES_ACTION_TYPES } from 'enum/categoryActionTypes';

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type DirectoryItemType = {
  title: string;
  route: string;
  imageUrl: string;
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export type CategoryMap = {
  [key: string]: CategoryItem[];
}

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;