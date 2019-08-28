import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';


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

getAllRestaurants(): Observable<Restaurant> {
  return this.http.get<Restaurant>(RestaurantService.BACK + 'restaurant/');
}

getRestaurantByField(field: string, search: string): Observable<Restaurant>{
  return this.http.get<Restaurant>(RestaurantService.BACK + 'restaurant/?' + field + '=' + search)
}

getRestaurantByQuery(query: string): Observable<Restaurant>{
  return this.RestaurantByField('q', query);
}

getRestaurantByName(name: string): Observable<Restaurant>{
  return this.RestaurantByField("name", name);
}

getRestaurantByCity(city: string): Observable<Restaurant>{
  return this.RestaurantByField("city", city);
}

}
