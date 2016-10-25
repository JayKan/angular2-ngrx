import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'book-preview-list',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <book-preview
    *ngFor="let book of books"
    [book]="book">  
  </book-preview>
  `,
  styles: [`
  book-preview-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 210px;
  }
  `]
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}