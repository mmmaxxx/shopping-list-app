import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {ListState} from '../state/list.state';

export const selectList = (state: AppState) => state.lists;

export const listData = createSelector(
  selectList,
  (state: ListState) => state.data
);

export const listDataCount = createSelector(
  selectList,
  (state: ListState) => state.data.length
);

export const currentList = createSelector(
  selectList,
  (state: ListState) => state.data.filter(d => d.id === state.currentList).length ? state.data.filter(d => d.id === state.currentList)[0] : null
);

export const currentListIngredients = createSelector(
  selectList,
  (state: ListState) => state.data.filter(d => d.id === state.currentList).length ? state.data.filter(d => d.id === state.currentList)[0].ingredients : null
);


