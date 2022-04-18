import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shop/services/shopping-list.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ingredients: Ingredient[]
 
  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients()
    this.slService.ingredientAdded.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients)
  }

  onIngredientAdded(item: Ingredient) {
    this.slService.onAddIngredient(item)
  }

}
