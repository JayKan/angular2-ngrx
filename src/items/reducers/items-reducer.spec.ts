import { itemsReducer } from './items-reducer';

describe('items-reducer', () => {
  let initialState = [
    { id: 0, name: 'First Item' },
    { id: 1, name: 'Second Item' }
  ];

  it('should return an empty array by default', () => {
    let defaultState = itemsReducer(undefined, { type: 'random', payload: {} });
    expect(defaultState).toEqual([]);
  });

  it('should ADD_ITEMS', () => {
    let payload = initialState;
    let currentItemsState = itemsReducer([{id: 2, name: 'Test Item'}], { type: 'ADD_ITEMS', payload: initialState });
    expect(currentItemsState).toEqual(payload);
  });

  it('should CREATE_ITEM', () => {
    let payload = { id: 2, name: 'Test Item' };
    let result = [...initialState, payload];
    let currentState = itemsReducer(initialState, { type: 'CREATE_ITEM', payload: payload });
    expect(currentState).toEqual(result);
  });

  it('should UPDATE_ITEM', () => {
    let payload = { id: 1, name: 'Updated Second Item Name' };
    let result = [initialState[0], { id: 1, name: 'Updated Second Item Name' } ];
    let currentState = itemsReducer(initialState, { type: 'UPDATE_ITEM', payload: payload });
    expect(currentState).toEqual(result);
  });

  it('should DELETE_ITEM', () => {
    let payload = { id: 1 };
    let result = [initialState[0]];
    let currentState = itemsReducer(initialState, { type: 'DELETE_ITEM', payload: payload });
    // console.log('Current State: ', JSON.stringify(currentState, null, 4));
    expect(currentState).toEqual(result);
  });
});