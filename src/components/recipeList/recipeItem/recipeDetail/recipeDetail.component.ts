import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/models/recipes/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipeDetail.component.html',
  styleUrls: ['./recipeDetail.component.css']
})
export class RecipeDetailComponent {
  activeRecipe: Recipe;
  text = "This is a recipe details"

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router){};

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.activeRecipe = this.recipeService.getRecipeById(+params['id']);
      }
    )
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddToShopingCart(){
    this.recipeService.addIngredientsToShopingCart(this.activeRecipe.ingredients);
  }
}
