import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormRestaurantComponent } from './formRestaurant/formRestaurant.component';

@NgModule({
   declarations: [
      AppComponent,
      RestaurantComponent,
      FormRestaurantComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
