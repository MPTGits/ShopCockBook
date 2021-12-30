import { Component, Input } from '@angular/core';
import { Recipe } from 'src/models/recipes/recipe.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipeDetail.component.html',
  styleUrls: ['./recipeDetail.component.css']
})
export class RecipeDetailComponent {
  @Input() activeRecipe: Recipe;
  text = "This is a recipe details"

}
