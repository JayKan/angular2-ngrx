import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { AppState } from '../../app';
import { getSearchQuery, getSearchResults, getSearchLoading } from '../reducers/selectors';
import { BookActions } from '../book-actions';

@Component({
  selector: 'books-page',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <book-search
      [query]="searchQuery$ | async"
      [searching]="loading$ | async"
      (search)="search($event)">    
    </book-search>
    
    <book-preview-list [books]="books$ | async"></book-preview-list>        
  `,
  styles: [`
  books-page {
    display: flex;
    position: relative;
  }
  `]
})
export class BooksPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store$: Store<AppState>, private actions: BookActions) {
    this.searchQuery$ = store$.let(getSearchQuery).take(1);
    this.books$ = getSearchResults(store$);
    this.loading$ = store$.let(getSearchLoading);
  }

  search(query: string): void {
    this.store$.dispatch(
      this.actions.search(query)
    );
  }
}