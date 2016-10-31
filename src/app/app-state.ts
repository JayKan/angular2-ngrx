import { Item } from '../items';
import { BooksState, SearchState } from '../books';


export interface AppState {
  items: Item[];
  selectedItem: Item;

  books: BooksState;
  search: SearchState;
}

