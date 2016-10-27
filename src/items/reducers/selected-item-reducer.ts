import { Action, ActionReducer } from '@ngrx/store';

// `selectedItemReducer` handles select item related operations
export const selectedItemReducer = (state: any = null, { type, payload }: Action) => {
  switch (type) {
    case 'SELECT_ITEM':
      return payload;

    default:
      return state;
  }
};