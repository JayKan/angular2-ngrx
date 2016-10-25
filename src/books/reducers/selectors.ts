import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import 'rxjs/add/observable/combineLatest';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 *
 * NOTE: `compose` creates a `right` to `left` flow of data.
 */
import { compose } from '@ngrx/core/compose';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../app';
import { Book } from '../models/book';
import { BooksState } from './books-reducer';
import { SearchState } from './search-reducer';

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
//=========================================================
//  Books Selectors
//---------------------------------------------------------
export function getBooksState(state$: Observable<AppState>) {
  return state$.select(state => state.books);
}
export function getBookStateEntities(state$: Observable<BooksState>) {
  return state$.select(state => state.entities)
}
export function getBookIds(state$: Observable<BooksState>) {
  return state$.select(state => state.ids);
}
export function getSelectedBookId(state$: Observable<BooksState>) {
  return state$.select(state => state.selectedBookId);
}

export function getSelectedBook(state$: Observable<BooksState>) {
  return Observable.combineLatest<{ [id: string]: Book }, string>(
    state$.let(getBookStateEntities),
    state$.let(getSelectedBookId)
  ).map(([ entities, selectedBookId ]) => entities[selectedBookId]);
}

export const getBookEntities = compose(getBookStateEntities, getBooksState);



//=========================================================
//  Search Selectors
//---------------------------------------------------------
export function getSearchState(state$: Observable<AppState>) {
  return state$.select(state => state.search);
}
export function getQuery(state$: Observable<SearchState>) {
  return state$.select(state => state.query)
}
export function getSearchStateBookIds(state$: Observable<SearchState>) {
  return state$.select(state => state.ids);
}
export function getSearchStateLoading(state$: Observable<SearchState>) {
  return state$.select(state => state.loading);
}

export const getSearchQuery = compose(getQuery, getSearchState);
export const getSearchBookIds = compose(getSearchStateBookIds, getSearchState);
export const getSearchLoading = compose(getSearchStateLoading, getSearchState);

export const getSearchResults= (state$: Observable<AppState>) => {
  return Observable.combineLatest<{ [id: string]: Book }, string[]>(
    state$.let(getBookEntities),
    state$.let(getSearchBookIds)
  ).map(([ entities, ids ]) => ids.map(id => entities[id]));
};
