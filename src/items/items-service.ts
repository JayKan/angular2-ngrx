import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app';
import { Item } from './models/item';

const BASE_URL = 'http://localhost:3000/items/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  items$: Observable<Item[]>;

  constructor(private http: Http, private store$: Store<AppState>) {
    this.items$ = store$.select('items');
  }

  loadItems(): void {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store$.dispatch(action));
  }

  saveItem(item: Item): void {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item): void {
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store$.dispatch(action));
  }

  updateItem(item: Item): void {
    this.http.put(`${BASE_URL}${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store$.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  deleteItem(item: Item): void {
    this.http.delete(`${BASE_URL}${item.id}`)
      .subscribe(action => this.store$.dispatch({ type: 'DELETE_ITEM', payload: item }));
  }
}