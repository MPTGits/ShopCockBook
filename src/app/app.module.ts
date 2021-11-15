import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { RecipeDetailComponent } from 'src/components/recipeList/recipeItem/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from 'src/components/recipeList/recipeItem/recipeItem.component';
import { RecipeListComponent } from 'src/components/recipeList/recipeList.component';
import { ShopingCartComponent } from 'src/components/shopingCart/shopingCart.component';
import { ShopingCartEditComponent } from 'src/components/shopingCart/shopingCartEdit/shopingCartEdit.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopingCartComponent,
    HeaderComponent,
    ShopingCartEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
