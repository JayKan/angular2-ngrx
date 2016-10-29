import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  encapsulation: ViewEncapsulation.None,
  template:` 
   <header class="header">
      <div class="g-row g-cont">
        <div class="g-col">
          <h1 class="header-title">Angular2 • NgRx</h1>
          <ul class="header-actions">
            <li><a [routerLink]="['/']">Books</a></li>
            <li><a [routerLink]="['/todos']">Todos</a></li>                                   
          </ul>
        </div>
      </div>
  </header>
  `,
  styles: [
    require('./app-header.scss')
  ]
})
export class AppHeaderComponent {

}