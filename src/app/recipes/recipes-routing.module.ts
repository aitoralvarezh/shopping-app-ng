import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent
} from './pages';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        children: [
            {
                path: '',
                component: RecipeStartComponent
            },
            {
                path: 'new',
                component: RecipeEditComponent
            },
            {
                path: ':id',
                component: RecipeDetailsComponent
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent
            },
            {
                path: 'recipe-item/:id',
                component: RecipeItemComponent
            }
        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }