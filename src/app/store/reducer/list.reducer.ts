import {Action, createReducer, on} from '@ngrx/store';
import {initialListState, ListState} from '../state/list.state';
import {addIngredient, addList, deleteIngredient, deleteList, editIngredient, retrieveList, updateIngredient} from '../action/list.action';

export const reducer = createReducer(
  initialListState,
  on(addIngredient, (state: ListState, action) => ({
    ...state,
    data: state.data.map(i => i.id === state.currentList ? {
      ...i,
      ingredients: [action.payload, ...i.ingredients]
    } : i)
  })),
  on(updateIngredient, (state: ListState, action) => ({
    ...state,
    data: state.data.map(i => i.id === state.currentList ? {
      ...i,
      ingredients: i.ingredients.map(ing => ing === action.payload ? {
        ...ing,
        tickedOff: !ing.tickedOff
      } : ing)
    } : i)
  })),
  on(deleteIngredient, (state: ListState, action) => ({
    ...state,
    data: state.data.map(i => i.id === state.currentList ? {
      ...i,
      ingredients: i.ingredients.filter(ing => ing !== action.payload)
    } : i)
  })),
  on(editIngredient, (state: ListState, action) => ({
    ...state,
    data: state.data.map(i => i.id === state.currentList ? {
      ...i,
      ingredients: i.ingredients.map(ing => ing.name === action.payload.name ? {
        ...ing,
        quantity: ((ing.quantity || 0) + action.payload.quantity)
      } : ing)
    } : i)
  })),
  on(addList, (state: ListState, action) => ({
    ...state,
    data: [{title: action.payload.title, id: action.payload.id, ingredients: []}, ...state.data],
    currentList: action.payload.id
  })),
  on(retrieveList, (state: ListState, action) => ({
    ...state,
    currentList: action.payload
  })),
  on(deleteList, (state: ListState, action) => ({
    ...state,
    data: state.data.filter(l => l.id !== action.payload),
    currentList: state.data.filter(l => l.id !== action.payload).length > 0 ? state.data.filter(l => l.id !== action.payload)[0].id : null
  })),
);

export function listReducer(
  state: ListState,
  action: Action
) {
  return reducer(state, action);
}
