import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from './models/book';

@Injectable()
export class BookActions {
  static SEARCH = '[Book] Search';
  static SEARCH_COMPLETE = '[Book] Search Complete';
  static SEARCH_COMPLETE_FAILED = '[Book] Search Complete Failed';
  static LOAD = '[Book] Load';
  static SELECT = '[Book] Select';

  search(query: string): Action {
    return {
      type: BookActions.SEARCH,
      payload: query
    };
  }

  searchComplete(books: Book[]): Action {
    return {
      type: BookActions.SEARCH_COMPLETE,
      payload: books
    };
  }

  searchCompleteFailed(error): Action {
    return {
      type: BookActions.SEARCH_COMPLETE_FAILED,
      payload: error
    }
  }

  load(): Action {
    return {
      type: BookActions.LOAD
    };
  }

  select(): Action {
    return {
      type: BookActions.SELECT
    };
  }
}