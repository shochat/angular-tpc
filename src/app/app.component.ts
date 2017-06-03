import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
      <div id="main">
        <router-outlet></router-outlet>
        <!--<app-left-sidebar></app-left-sidebar>-->
        <!--<app-right-sidebar></app-right-sidebar>-->
      </div>
      <app-footer></app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
