import {Component, Input, OnInit} from '@angular/core';
import {unit} from '../data/units';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/state/app.state';
import {currentList, currentListIngredients} from '../store/selector/list.selector';
import {filter, map, take} from 'rxjs/operators';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {

  listData$ = this.store.pipe(select(currentList));
  ingredientList$ = this.store.pipe(select(currentListIngredients));
  activeIngredientList = 0;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.ingredientList$
      .subscribe(ingredientList => {
        this.activeIngredientList = !!ingredientList ? ingredientList.filter(d => !d.tickedOff).length : 0;
      });
  }

  unitMatcher(v) {
    const input = v.replace(/\s+/, '');
    const unitMatch = unit.filter(u => u.values.includes(input));
    if (unitMatch.length > 0) {
      return unitMatch[0].abbreviation;
    }
    return v;
  }

  convertIngredientUnit(i, ei) {

    console.log('TEST', i, ei);

    // ei is the id of the existing ingredient
    const unitMatch = unit.filter(u => u.abbreviation === i.unit);
    if (unitMatch.length > 0) {
      const unitObject = unitMatch[0];
      console.log('TEST 1', unitObject);
      if (!!unitObject.conversion && unitObject.conversion.length > 0) {
        const existingUnitID = unit.filter(eU => ei.unit === eU.abbreviation)[0].id;
        console.log('TEST 2', existingUnitID);
        const targetUnitMatch = unitObject.conversion.filter(un => un.unit === existingUnitID);
        console.log('TEST 3', targetUnitMatch);
        if (targetUnitMatch.length > 0) {
          return (i.quantity / targetUnitMatch[0].coefficient);
        }
        return i.quantity;
      }
      return i.quantity;
    }
    return i.quantity;
  }

  tickIngredient(ing) {
    this.store.dispatch({type: '[INGREDIENT] Update', payload: ing});
  }

  newIngredient(value) {
    // parsed value extracts the quantity, unit and value
    const rg = /([0-9]+(\.[0-9]+)?) ?([a-z]+) ([a-z0-1 ]+)/g;
    const regexMatch = rg.exec(value);
    if (regexMatch.length > 3) {
      const retrievedUnit = this.unitMatcher(regexMatch[3]);
      const retrievedQuantity = +regexMatch[1];
      const retrievedLabel = regexMatch[4];


      const parsedValue = {name: retrievedLabel, quantity: retrievedQuantity, unit: retrievedUnit};

      console.log('PARSED', parsedValue);


      this.ingredientList$.pipe(take(1)).subscribe(ingredientList => {
        const ingredientListMatch = ingredientList.filter(g => g.name === parsedValue.name);
        if (ingredientListMatch.length > 0) {
          const matchedIngredientUnit = ingredientListMatch[0];
          // Ingredient exists, quantity should be updated
          // coefficient should be applied if possible when unit different to one already there
          parsedValue.quantity = this.convertIngredientUnit(parsedValue, matchedIngredientUnit);


          this.store.dispatch({type: '[INGREDIENT] Edit', payload: {name: parsedValue.name, quantity: parsedValue.quantity}});
        } else {
          this.store.dispatch({type: '[INGREDIENT] Add', payload: parsedValue});
        }
      });
    }
  }

}
