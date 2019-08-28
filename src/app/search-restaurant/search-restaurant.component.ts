import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.css']
})
export class SearchRestaurantComponent implements OnInit {
      restaurants: Restaurant;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      const query = this.route.snapshot.paramMap.get('q');
      const city = this.route.snapshot.paramMap.get('city');
      
      if (city)
      this.restaurantService.getRestaurantsByCityAndQuery(city, query).subscribe(
      result => this.restaurants = result,
      error => console.log('une erreur de récup des resto est survenue', error)
      );
      else
      this.restaurantService.getRestaurantsByQuery(query).subscribe(
      result => this.restaurants = result,
      error => console.log('une erreur de récup des resto est survenue', error)
      );
}

}
