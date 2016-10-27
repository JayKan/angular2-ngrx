import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from '../items-service';
import { Item } from '../models/item';
import { AppState } from '../../app';

@Component({
  selector: 'items-page',
  encapsulation: ViewEncapsulation.None,
  template:`
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <items-list
        [items]="items$ | async"
        (selected)="selectItem($event)"
        (deleted)="deleteItem($event)"></items-list>
    </div>
    
    <div class="mdl-cell mdl-cell--6-col">
      <item-detail
        [item]="selectedItem$ | async"
        (save)="saveItem($event)"
        (cancelled)="resetItem($event)"></item-detail>
    </div>
  </div>
  
  `,
  styles: [`
    items-page {
        display: block;
        position: relative;
        max-width: 960px;
        margin: 60px auto auto auto;
    }
   .items {
     padding: 20px;
   }
   .mdl-cell.mdl-cell--6-col {
     margin: 0 auto;
   }
   .mdl-cell.mdl-cell--6-col:first-child {
     margin-bottom: 20px;
   }
   
  `]
})
export class ItemsPageComponent {
  items$: Observable<Item[]>;
  selectedItem$: Observable<Item>;

  constructor(private items: ItemsService, private store$: Store<AppState>) {
    this.items$ = items.items$;
    this.selectedItem$ = store$.select('selectedItem');
    this.selectedItem$.subscribe(v => console.log('Selected item: %s', JSON.stringify(v, null, 4)));

    // initialize itemsService
    items.loadItems();
  }

  resetItem(item?: Item): void {
    console.log('Reset Item: ', item);
    let emptyItem = { id: null, name: '', description: '' };
    this.store$.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
  }

  selectItem(item: Item): void {
    this.store$.dispatch({ type: 'SELECT_ITEM', payload: item });
  }

  saveItem(item: Item): void {
    this.items.saveItem(item);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  deleteItem(item: Item): void {
    this.items.deleteItem(item);

    this.resetItem();
  }
}