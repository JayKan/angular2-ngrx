import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template:`
  <div class="content mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <app-header></app-header>
    
    <main class="page-content">
      <router-outlet></router-outlet>
    </main>
    
    <ngrx-store-log-monitor
      [toggleCommand]="'ctrl-k'"
      [positionCommand]="'ctrl-e'">    
    </ngrx-store-log-monitor>
    
  </div>
 
  `,
  styles: [
    require('./app.scss')
  ]
})
export class AppComponent {

}