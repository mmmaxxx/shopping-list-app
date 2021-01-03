import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/state/app.state';
import {currentList, listData, listDataCount, selectList} from './store/selector/list.selector';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping List';


  allLists$ = this.store.pipe(select(listData));
  currentList$ = this.store.pipe(select(currentList));
  allListsCount$ = this.store.pipe(select(listDataCount));

  constructor(
    private store: Store<AppState>
  ) {
  }

  selectList(i) {
    this.store.dispatch({type: '[LIST] Retrieve', payload: i});
  }

  addList() {
    this.allListsCount$.pipe(take(1))
      .subscribe(count => {
        const p = prompt('Whats the list name?');

        if (p) {
          this.store.dispatch({type: '[LIST] Add', payload: {title: p, id: (count + 1)}});
        }
      });

  }

  deleteList(id) {
    const c = confirm('Are you sure?');
    if(c) {
      this.store.dispatch({type: '[LIST] Delete', payload: id});
    }
  }


}
