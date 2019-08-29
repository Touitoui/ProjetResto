import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
      AppComponent,
      TopBarComponent,
      RestaurantComponent,
      ListAllRestaurantComponent,
      FormRestaurantComponent,
      CommentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
  Ng2SearchPipeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
