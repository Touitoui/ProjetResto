import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';


const routes: Routes = [
  { path: 'restaurant/:id', component: RestaurantComponent},
  { path: 'formRestaurant', component: FormRestaurantComponent },
  { path: 'formRestaurant/:id', component: FormRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
