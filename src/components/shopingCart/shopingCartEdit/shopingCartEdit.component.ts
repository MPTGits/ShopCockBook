import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/models/ingredient/ingredient.model";
import { ShopingCartService } from "src/services/shopingCart.service";



@Component({
    selector: 'shoping-cart-edit',
    templateUrl: './shopingCartEdit.component.html',
    styleUrls: ['./shopingCartEdit.component.css']
})
export class ShopingCartEditComponent implements OnInit, OnDestroy{
    @ViewChild('f', {static: false}) slForm: NgForm;
    text = "Shoping cart edit";
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private shopingCartService: ShopingCartService){};

    ngOnInit(): void {
        this.subscription = this.shopingCartService.startedEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editedItemIndex = index;
                this.editedItem = this.shopingCartService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        );
    }


    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onAddItem(form: NgForm){
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode){
            this.shopingCartService.updateIngredient(this.editedItemIndex, newIngredient);
        } 
        else {
        this.shopingCartService.addIngredient(newIngredient);
        }
    }
}