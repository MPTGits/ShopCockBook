import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";
import { ShopingCartService } from "src/services/shopingCart.service";



@Component({
    selector: 'shoping-cart-edit',
    templateUrl: './shopingCartEdit.component.html',
    styleUrls: ['./shopingCartEdit.component.css']
})
export class ShopingCartEditComponent{
    text = "Shoping cart edit";
    @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;

    constructor(private shopingCartService: ShopingCartService){};

    onAddItem(){
        const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
                                            this.amountInputRef.nativeElement.value);
        this.shopingCartService.addIngredient(newIngredient);
    }
}