//app.component.ts

import { RouterLink, RouterOutlet } from '@angular/router';
import { PTypeComponent } from './components/p-type/p-type.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    PTypeComponent
  ]
})
export class AppComponent {
  title = 'angular-standalone-graphql';
}