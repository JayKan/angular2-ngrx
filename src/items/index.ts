import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPageComponent } from './pages/items-page';
import { ItemDetailComponent } from './components/item-detail';
import { ItemsListComponent } from './components/items-list';

import { ItemsService } from './items-service';

export { ItemsService };
export { Item } from './models/item';
export { itemsReducer } from './reducers/items-reducer';
export { selectedItemReducer } from './reducers/selected-item-reducer';

const routes: Routes = [
  { path: 'todos',  component: ItemsPageComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ItemsPageComponent,
    ItemDetailComponent,
    ItemsListComponent,
  ],
  exports: [
    ItemsPageComponent
  ],
  providers: [
    ItemsService
  ]
})
export class ItemsModule {}

