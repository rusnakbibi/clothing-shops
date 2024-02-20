import { createAction, withMatcher } from 'utils/reducer';

import { CATEGORIES_ACTION_TYPES } from 'enum/categoryActionTypes';
import {
  Category,
  FetchCategoriesStart,
  FetchCategoriesSuccess,
  FetchCategoriesFailed,
} from 'types/category';


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));


export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  ));

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
