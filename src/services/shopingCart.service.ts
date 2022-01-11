import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";

export class ShopingCartService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("carrot", 5),
        new Ingredient("cream", 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}