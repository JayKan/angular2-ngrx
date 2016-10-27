import { selectedItemReducer } from './selected-item-reducer';

describe('select-item-reducer', () => {
  it('should return null by default', () => {
    let defaultState = selectedItemReducer(undefined, { type: 'random', payload: {} });
    expect(defaultState).toBeNull();
  });

  it('should `SELECT_ITEM` and returns the provided payload item', () => {
    let selectItem = selectedItemReducer(undefined, { type: 'SELECT_ITEM', payload: 'payload' });
    expect(selectItem).toBe('payload');
  });
});