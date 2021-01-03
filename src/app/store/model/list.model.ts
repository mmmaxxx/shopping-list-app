import {IngredientModel} from './ingredient.model';

export interface ListModel {
  id: number;
  title: string;
  ingredients: IngredientModel[];
}
