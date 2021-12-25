import { Component } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";



@Component({
    selector: 'shoping-cart',
    templateUrl: './shopingCart.component.html',
    styleUrls: ['./shopingCart.component.css']
})
export class ShopingCartComponent{
    ingredients: Ingredient[] = [
        new Ingredient("carrot", 5),
        new Ingredient("cream", 10)
    ];
    text = "This is a shoping cart";
}