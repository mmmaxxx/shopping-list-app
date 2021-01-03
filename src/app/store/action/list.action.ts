import {createAction, props} from '@ngrx/store';
import {IngredientModel} from '../model/ingredient.model';

export const addIngredient = createAction(
  '[INGREDIENT] Add',
  props<{payload: IngredientModel}>()
);

export const updateIngredient = createAction(
  '[INGREDIENT] Update',
  props<{payload: IngredientModel}>()
);

export const editIngredient = createAction(
  '[INGREDIENT] Edit',
  props<{payload: {name: string, quantity: number}}>()
);

export const deleteIngredient = createAction(
  '[INGREDIENT] Delete',
  props<{payload: IngredientModel}>()
);

export const retrieveList = createAction(
  '[LIST] Retrieve',
  props<{payload: number}>()
);

export const addList = createAction(
  '[LIST] Add',
  props<{payload: {id: number, title: string}}>()
);

export const deleteList = createAction(
  '[LIST] Delete',
  props<{payload: number}>()
);
