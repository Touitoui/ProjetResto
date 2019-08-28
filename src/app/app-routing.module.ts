import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';

const routes: Routes = [
      { path: '', component: ListAllRestaurantComponent },
  { path: 'restaurant/:id', component: RestaurantComponent},
  { path: 'search/:city/:q', component: SearchRestaurantComponent},
  { path: 'search/:q', component: SearchRestaurantComponent},
  { path: 'formRestaurant', component: FormRestaurantComponent },
  { path: 'formRestaurant/:id', component: FormRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
