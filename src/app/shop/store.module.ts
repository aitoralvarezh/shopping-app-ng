import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  ShoppingEditComponent
} from './pages'
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './store-routing.module';


@NgModule({
  declarations: [
    ShopComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ShopRoutingModule
  ],
  providers: [],
})
export class ShopModule { }