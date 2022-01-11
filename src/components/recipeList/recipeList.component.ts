import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../../models/recipes/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit{
  @Input() isTabActive = false;
  currentClickedRecipe: Recipe;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => this.currentClickedRecipe = recipe)
  }


}
