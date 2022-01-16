import { Injectable } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";
import { Recipe } from "src/models/recipes/recipe.model";
import { ShopingCartService } from "./shopingCart.service";


@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(1,
                   'Brownies', 
                   'Some fluffy brownies', 
                   'https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg',
                   [new Ingredient('Eggs', 4),
                    new Ingredient('Sugar', 250)]),
        new Recipe(2,
                   'Cream Caremel', 
                   'Some cream caramel', 
                   'https://recepti.gotvach.bg/files/lib/400x296/krem-karamel-spoluchliv1.jpg',
                    [new Ingredient('Eggs', 2),
                     new Ingredient('Flower', 150)])
      ];

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
}