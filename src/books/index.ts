import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';

import { BooksPageComponent } from './pages/books-page';
import { BookSearchComponent } from './components/book-search';
import { BookPreviewListComponent } from './components/book-preview-list';
import { BookPreviewComponent } from './components/book-preview';
import { BookAuthorsComponent } from './components/book-authors';

import { BooksService } from './books-service';
import { BookActions } from './book-actions';
import { BookEffects } from './book-effects';


import { EllipsisPipe } from './pipes/ellipsis';
import { AddCommasPipe } from './pipes/add-commas';

export { Book } from './models/book';
export { BooksState, booksReducer } from './reducers/books-reducer';
export { SearchState, searchReducer } from './reducers/search-reducer';

const routes: Routes = [
  { path: '',   component: BooksPageComponent   },
  { path: '**', component: BooksPageComponent   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(routes),
    EffectsModule.run(BookEffects)
  ],
  declarations: [
    BooksPageComponent,
    BookSearchComponent,
    BookPreviewListComponent,
    BookPreviewComponent,
    BookAuthorsComponent,

    EllipsisPipe,
    AddCommasPipe
  ],
  exports: [
    BooksPageComponent
  ],
  providers: [
    BookActions,
    BooksService
  ]
})
export class BooksModule {}