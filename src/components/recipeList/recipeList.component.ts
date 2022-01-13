import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => this.currentClickedRecipe = recipe)
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
