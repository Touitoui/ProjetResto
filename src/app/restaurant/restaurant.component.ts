import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Comment } from '../comment';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  @Input()
  comments: Comment;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const restaurantId = +this.route.snapshot.paramMap.get('id');

    this.loadRestaurant(restaurantId);
  }

  private loadRestaurant(restaurantId: number) {
    this.restaurantService.getRestaurant(restaurantId).subscribe(
      result => this.restaurant = result,
      error => console.log('une erreur de récup resto id est survenue', error));
  }

  delRestaurant() {
    this.restaurantService.delRestaurant(this.restaurant.id).subscribe(
      () => this.router.navigateByUrl('/')
    );
  }

  insertComment() {
    const restaurantId = +this.route.snapshot.paramMap.get('id');
    this.loadRestaurant(restaurantId);
  }

}
