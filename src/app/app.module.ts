import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { EmptyRecipeComponent } from 'src/components/recipeList/emptyRecipe/emptyRecipe.component';
import { RecipeEditComponent } from 'src/components/recipeList/recipeEdit/recipeEdit.component';
import { RecipeDetailComponent } from 'src/components/recipeList/recipeItem/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from 'src/components/recipeList/recipeItem/recipeItem.component';
import { RecipeListComponent } from 'src/components/recipeList/recipeList.component';
import { ShopingCartComponent } from 'src/components/shopingCart/shopingCart.component';
import { ShopingCartEditComponent } from 'src/components/shopingCart/shopingCartEdit/shopingCartEdit.component';
import { RecipeService } from 'src/services/recipe.service';
import { ShopingCartService } from 'src/services/shopingCart.service';
import { DropdownDirective } from 'src/shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopingCartComponent,
    HeaderComponent,
    ShopingCartEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    EmptyRecipeComponent,
    RecipeEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShopingCartService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
