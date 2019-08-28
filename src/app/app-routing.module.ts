import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';

const routes: Routes = [
      { path: '', component: ListAllRestaurantComponent },
  { path: 'restaurant/:id', component: RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
