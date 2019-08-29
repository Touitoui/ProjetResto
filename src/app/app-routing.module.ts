import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: '', component: ListAllRestaurantComponent },
  { path: 'restaurant/:id', component: RestaurantComponent},
  { path: 'formRestaurant', component: FormRestaurantComponent },
  { path: 'formRestaurant/:id', component: FormRestaurantComponent },
  { path: 'restaurant/:id/comment', component: CommentComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
