import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/services/recipes.service';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe : Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe)
  }
  
  
}
