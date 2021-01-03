import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() newIngredient = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addIngredient(e) {
    this.newIngredient.emit(e.target.value);
    e.target.value = null;
  }

}
