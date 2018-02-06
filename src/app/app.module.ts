import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {ProductsModule} from './+products/products.module';
import {ProductsService} from './services/products.service';
import {CartService} from './services/cart.service';
import {Location, CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpModule,
    ProductsModule,
  ],
  providers: [ProductsService, CartService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
