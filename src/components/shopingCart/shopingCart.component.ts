import { Component, Input } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";



@Component({
    selector: 'shoping-cart',
    templateUrl: './shopingCart.component.html',
    styleUrls: ['./shopingCart.component.css']
})
export class ShopingCartComponent{
    @Input() isTabActive = false;
    ingredients: Ingredient[] = [
        new Ingredient("carrot", 5),
        new Ingredient("cream", 10)
    ];
    text = "This is a shoping cart";

    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}