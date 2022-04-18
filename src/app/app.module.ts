import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './shop/services/shopping-list.service';
import { UiModule } from './ui/ui.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShopModule } from './shop/store.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecipesModule,
    ShopModule,
    UiModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
