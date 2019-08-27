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

getRestaurant(id: number): Observable<Restaurant> {
  return this.http.get<Restaurant>(RestaurantService.BACK + 'restaurant/' + id);
}

}
