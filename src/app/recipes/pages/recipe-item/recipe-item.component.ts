import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Input() index: number;

  constructor(private recipeService : RecipesService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
