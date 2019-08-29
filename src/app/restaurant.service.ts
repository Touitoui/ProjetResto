import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';
import { Comment} from './comment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  static readonly BACK = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(RestaurantService.BACK + 'restaurant/' + id);
  }

  public addRestaurant(restaurant: Restaurant) {
    return this.http.post(RestaurantService.BACK + 'restaurant', restaurant);
  }

  public delRestaurant(id: number) {
    return this.http.delete(RestaurantService.BACK + 'restaurant/' + id);
  }

  public editRestaurant(restaurant: Restaurant) {
    return this.http.put(RestaurantService.BACK + 'restaurant/' + restaurant.id, restaurant);
  }

  public getAllRestaurants(): Observable<Restaurant> {
    return this.http.get<Restaurant>(RestaurantService.BACK + 'restaurant/');
  }

  public getComments(id: number): Observable<Comment> {
    return this.http.get<Comment>(RestaurantService.BACK + 'restaurant/' + id + '/comment');
  }

  public addComment(comment: Comment) {
    return this.http.post(RestaurantService.BACK + 'comment', comment);
  }

}
