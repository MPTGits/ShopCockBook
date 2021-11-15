import { Component } from '@angular/core';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipeItem.component.html',
  styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent {
  text = "This is a recipe item"
}
