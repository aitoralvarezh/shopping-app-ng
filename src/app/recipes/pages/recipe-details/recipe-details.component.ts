import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../../../shop/services/shopping-list.service';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

 paramsSub : Subscription;
 recipe : Recipe;
 id: number
  
  constructor(
    private slService : ShoppingListService, 
    private route: ActivatedRoute, 
    private recipeService: RecipesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }

  onNavigate(id: number) {
    // this.router.navigate([this.id , 'edit']);
     this.router.navigate(['edit'], { relativeTo: this.route });
  }
  
  onAddToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient)
  } 
  ngOnDestroy(): void {
    this.paramsSub.unsubscribe()
  }
}
