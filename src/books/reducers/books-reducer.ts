import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export interface BooksState {
  ids: string[];
  entities: { [id: string]: Book };
  selectedBookId: string|null;
}

const initialState: BooksState = {
  ids: [],
  entities: {},
  selectedBookId: null
};


export function booksReducer(state: BooksState = initialState, action: Action): BooksState {
  switch (action.type) {
    case '[Book] Search Complete':
    case '[Collection] Load Success': {
      const books = action.payload;
      const newBooks = books.filter(book => !state.entities[book.id]);
      const newBookIds = newBooks.map(book => book.id);
      const newBookEntities = newBooks.reduce((entities: { [id: string]: Book }, book: Book) => {
        return Object.assign(entities, {
          [book.id]: book
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newBookIds],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedBookId: state.selectedBookId
      };
    }

    case '[Book] Load': {
      const book: Book = action.payload;

      if (state.ids.indexOf(book.id) > -1) {
        return state;
      }

      return {
        ids: [...state.ids, book.id ],
        entities: Object.assign({}, state.entities, {
          [book.id]: book
        }),
        selectedBookId: state.selectedBookId
      };
    }

    case '[Book] Select': {
      return {
        ids: state.ids,
        entities: state.entities,
        selectedBookId: action.payload
      };
    }

    default:
      return state;
  }
}