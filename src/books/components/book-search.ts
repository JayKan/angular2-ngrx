import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-search',
  encapsulation: ViewEncapsulation.None,
  template:`
  <md-card>
    <md-card-title>Find a Book</md-card-title>
    <md-card-content>
      <md-input 
        [placeholder]="'Search a book'"
        [value]="query"
        (keyup)="search.emit($event.target.value)">        
      </md-input>
      <md-spinner [class.show]="searching"></md-spinner>
    </md-card-content>
  </md-card>
  `,
  styles:[
    require('./book-search.scss')
  ]
})
export class BookSearchComponent {
  @Input() query: string = '';
  @Input() searching: boolean = false;

  @Output() search: EventEmitter<string> = new EventEmitter<string>(false);
}