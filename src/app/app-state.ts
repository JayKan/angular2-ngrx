import { Item } from '../items';

export interface AppState {
  items: Item[];
  selectedItem: Item;
}

