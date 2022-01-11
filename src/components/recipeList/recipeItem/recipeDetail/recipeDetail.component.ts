import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipes/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipeDetail.component.html',
  styleUrls: ['./recipeDetail.component.css']
})
export class RecipeDetailComponent {
  @Input() activeRecipe: Recipe;
  text = "This is a recipe details"

  constructor(private recipeService: RecipeService){};

  onAddToShopingCart(){
    this.recipeService.addIngredientsToShopingCart(this.activeRecipe.ingredients);
  }
}
