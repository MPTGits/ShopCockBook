import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/models/ingredient/ingredient.model";
import { Recipe } from "src/models/recipes/recipe.model";
import { ShopingCartService } from "./shopingCart.service";


@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();


    // private recipes: Recipe[] = [
    //     new Recipe(1,
    //                'Brownies', 
    //                'Some fluffy brownies', 
    //                'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg',
    //                [new Ingredient('Eggs', 4),
    //                 new Ingredient('Sugar', 250)]),
    //     new Recipe(2,
    //                'Cream Caremel', 
    //                'Some cream caramel', 
    //                'https://recepti.gotvach.bg/files/lib/400x296/krem-karamel-spoluchliv1.jpg',
    //                 [new Ingredient('Eggs', 2),
    //                  new Ingredient('Flower', 150)])
    //   ];

    private recipes: Recipe[] = [];

    constructor(private shopingCartService: ShopingCartService){};

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
        return this.recipes.find(item => item.id === id);
    }

    addIngredientsToShopingCart(ingredients: Ingredient[]){
        this.shopingCartService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(newRecipe: Recipe){
        this.recipes[newRecipe.id-1] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index);
        this.recipesChanged.next(this.recipes.slice());
      }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
      
}