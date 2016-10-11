import { Component, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'items-list',
  encapsulation: ViewEncapsulation.None,
  template:`
  <div class="fem-card mdl-card mdl-shadow--2dp" *ngFor="let item of items" (click)="selected.emit(item)">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ item.name }}</h2>
    </div>
    
    <div class="mdl-card__supporting-text">
      {{ item.description }}
    </div>
    
    <div class="mdl-card__menu">
      <button 
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
        (click)="deleted.emit(item); $event.stopPropagation();">
        <i class="material-icons">close</i>  
      </button>
    </div>
  </div>
  `
})
export class ItemsListComponent {
  @Input() items: Item[];

  @Output() selected: EventEmitter<any> = new EventEmitter<any>(false);
  @Output() deleted: EventEmitter<any> = new EventEmitter<any>(false);
}