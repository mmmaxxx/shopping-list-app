import {ListState} from './list.state';

export interface AppState {
  lists: ListState;
}

export const initialAppState: AppState = {
  lists: null
};
