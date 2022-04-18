import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import {
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeStartComponent,
    RecipeEditComponent
} from './pages'


@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RecipesRoutingModule,
    NgbModule
  ],
  providers: [],
})
export class RecipesModule { }