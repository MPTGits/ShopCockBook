import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/models/recipes/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipeItem.component.html',
  styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService){}


}
