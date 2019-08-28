import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RestaurantComponent,
    ListAllRestaurantComponent,
    FormRestaurantComponent,
    SearchRestaurantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
