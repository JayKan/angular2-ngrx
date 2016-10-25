import { Action } from '@ngrx/store';

export interface SearchState {
  ids: string[];
  loading: boolean;
  query: string;
}

const initialState: SearchState = {
  ids: [],
  loading: false,
  query: ''
};

export function searchReducer(state: SearchState = initialState, action: Action): SearchState {
  switch (action.type) {
    case '[Book] Search':
      const query = action.payload;

      if (query === '') {
        return {
          ids: [],
          loading: false,
          query: query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });

    case '[Book] Search Complete':
      const books = action.payload;

      return {
        ids: books.map(book => book.id),
        loading: false,
        query: state.query
      };

    default:
      return state;
  }
}