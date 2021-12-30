import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/models/ingredient/ingredient.model";



@Component({
    selector: 'shoping-cart-edit',
    templateUrl: './shopingCartEdit.component.html',
    styleUrls: ['./shopingCartEdit.component.css']
})
export class ShopingCartEditComponent{
    text = "Shoping cart edit";
    @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
                                            this.amountInputRef.nativeElement.value);
        this.ingredientAdded.emit(newIngredient)
    }
}