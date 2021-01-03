import {ListModel} from '../model/list.model';

export interface ListState {
  data: ListModel[];
  currentList: number;
}

export const initialListState: ListState = {
  data: [],
  currentList: null
};
