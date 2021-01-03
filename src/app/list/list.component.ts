import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/state/app.state';
import {listData} from '../store/selector/list.selector';
import {unit} from '../data/units';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() visible = false;
  @Input() listTitle: string;
  @Input() current = false;
  @Output() delete = new EventEmitter();



  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  deleteList() {
    this.delete.emit();
  }

}
