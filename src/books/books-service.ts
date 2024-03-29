import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/book';

@Injectable()
export class BooksService {
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {}

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }
}