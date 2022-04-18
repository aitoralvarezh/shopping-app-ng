import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ShoppingEditComponent
} from './pages';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }