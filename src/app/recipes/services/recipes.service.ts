import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/models/recipe.model';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../../shop/services/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 
      'this is a test Recipe', 
      'https://www.recipetineats.com/wp-content/uploads/2017/06/Pancakes-SQ.jpg?w=500&h=500&crop=1',
      [
        new Ingredient('flour', 1),
        new Ingredient('candy', 3)
      ]
     ),
    new Recipe(
      'A second test Recipe', 
      'this is a test Recipe', 
      'https://www.recipetineats.com/wp-content/uploads/2017/06/Pancakes-SQ.jpg?w=500&h=500&crop=1',
      [
        new Ingredient('apple', 4),
        new Ingredient('juice', 1)
      ]  
    )
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}
