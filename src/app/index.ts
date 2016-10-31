
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { ItemsModule, itemsReducer,  selectedItemReducer} from '../items';
import { BooksModule, booksReducer, searchReducer } from '../books';

import { AppComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';

export { AppState } from './app-state';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: false }),
    StoreModule.provideStore({
      items: itemsReducer,
      selectedItem: selectedItemReducer,
      books: booksReducer,
      search: searchReducer
    }),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,

    ItemsModule,
    BooksModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule {}