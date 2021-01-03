import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {listReducer} from './list.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  lists: listReducer
};
