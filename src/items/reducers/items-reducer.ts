import { Action, ActionReducer } from '@ngrx/store';

// `itemsReducer` handles actions on our list of items
export const itemsReducer = (state: any = [], { type, payload }: Action) => {
  switch (type) {
    // returns whatever collection so we send in as the nwe array
    case 'ADD_ITEMS':
      return payload;

    // return a new array by concatenating the existing array with our new items
    case 'CREATE_ITEM':
      return [...state, payload];

    // returns a new array by mapping via the current array, finding the item we
    // want to update and cloning a new by using Object.assign()
    case 'UPDATE_ITEM':
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });

    // returns a new array by filtering out the item we want to delete
    case 'DELETE_ITEM':
      return state.filter(item => {
        return item.id !== payload.id;
      });

    default:
      return state;
  }
};