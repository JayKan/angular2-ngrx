import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'book-preview',
  encapsulation: ViewEncapsulation.None,
  template:`
  <a>
    <md-card>
      <md-card-title-group>
        <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail" />
        <md-card-title>{{ title }}</md-card-title>
        <md-card-subtitle *ngIf="subtitle">{{ subtitle }}</md-card-subtitle>
      </md-card-title-group>
      <md-card-content>
        <p *ngIf="description">{{ description | bcEllipsis }}</p>
      </md-card-content>
      <md-card-footer>
        <book-authors [book]="book"></book-authors>
      </md-card-footer>
    </md-card>
  </a>
  `,
  styles:[
    require('./book-preview.scss')
  ]
})
export class BookPreviewComponent {
  @Input() book: Book;

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }
    return false;
  }
}