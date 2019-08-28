import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAllRestaurantComponent } from './list-all-restaurant/list-all-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    RestaurantComponent,
    ListAllRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
