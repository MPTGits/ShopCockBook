import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "src/models/ingredient/ingredient.model";
import { ShopingCartService } from "src/services/shopingCart.service";



@Component({
    selector: 'shoping-cart',
    templateUrl: './shopingCart.component.html',
    styleUrls: ['./shopingCart.component.css']
})
export class ShopingCartComponent implements OnInit, OnDestroy{
    @Input() isTabActive = false;
    activeIngredients: Ingredient[];
    private igChangeSub: Subscription
    text = "This is a shoping cart";

    constructor(private shopingCartService: ShopingCartService){}

    ngOnInit() {
        this.activeIngredients = this.shopingCartService.getIngredients();
        this.igChangeSub = this.shopingCartService.ingredientsChanged.subscribe((ingredient: Ingredient[]) => this.activeIngredients = ingredient)
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }

    onEditItem(index: number){
        this.shopingCartService.startedEditing.next(index);
    }
}