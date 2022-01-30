import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../../models/recipes/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy{
  @Input() isTabActive = false;
  recipes: Recipe[];
  subscription: Subscription;


  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router){}

  ngOnInit(){
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
