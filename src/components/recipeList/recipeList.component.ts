import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipes/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent {
  @Input() isTabActive = false;
  currentClickedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('Brownies', 'Some fluffy brownies', 'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg'),
    new Recipe('Cream Caremel', 'Some cream caramel', 'https://recepti.gotvach.bg/files/lib/400x296/krem-karamel-spoluchliv1.jpg')
  ];
  onRecipeDetailsClick(recipe: Recipe){
    this.currentClickedRecipe = recipe;
  }
}
