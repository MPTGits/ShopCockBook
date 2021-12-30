import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/models/recipes/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipeItem.component.html',
  styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent {
  @Output() recipeDetails = new EventEmitter<Recipe>();
  @Input() recipe: Recipe;
  constructor(){}
  onRecipeItemClick(){
    this.recipeDetails.emit();
  }

}
