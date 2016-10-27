import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'item-detail',
  encapsulation: ViewEncapsulation.None,
  template:`
  <div class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedItem.id">Editing {{ originalName }}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedItem.id">Create New Item</h2>
    </div>
    
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Name</label>
            <input [(ngModel)]="selectedItem.name"
              name="name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [(ngModel)]="selectedItem.description"
              name="description"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
          </div>
      </form>
    </div>
    
    <div class="mdl_card__actions">
      <button 
        class="mdl-button mdl-js-button mdl-js-ripple-effect" 
        type="submit" 
        (click)="cancelled.emit(selectedItem)">Cancel</button>
        
      <button
        class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect"
        type="submit"
        (click)="save.emit(selectedItem)">Save</button>        
    </div>
  </div>
  `
})
export class ItemDetailComponent {
  originalName: string;
  selectedItem: Item;

  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelled: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set item(value: Item) {
    if (value) this.originalName = value.name;
    this.selectedItem = Object.assign({}, value);
  }
}