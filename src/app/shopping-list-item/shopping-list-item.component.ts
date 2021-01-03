import {Component, Input, OnInit} from '@angular/core';
import {IngredientModel} from '../store/model/ingredient.model';
import {Store} from '@ngrx/store';
import {AppState} from '../store/state/app.state';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() ingredient: IngredientModel;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  deleteIngredient(i) {
    this.store.dispatch({type: '[INGREDIENT] Delete', payload: i});
  }

}
