import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingredientAdded = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('carrot', 4),
    new Ingredient('tomato', 3)
  ]
  constructor() { }
  getIngredients() {
    return this.ingredients.slice()
  }
  onAddIngredient(item : Ingredient) {
    this.ingredients.push(item)
    this.ingredientAdded.emit(this.ingredients.slice())
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}
