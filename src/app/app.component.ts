import { Component } from '@angular/core';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetResto';
  restaurant: Restaurant;
}
