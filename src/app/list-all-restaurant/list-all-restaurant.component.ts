import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-all-restaurant',
  templateUrl: './list-all-restaurant.component.html',
  styleUrls: ['./list-all-restaurant.component.css']
})
export class ListAllRestaurantComponent implements OnInit {
       restaurants: Restaurant;
       
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(
      result => this.restaurants = result,
      error => console.log('une erreur de récup des resto est survenue', error)
      );
  }

}
