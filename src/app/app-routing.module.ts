import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyRecipeComponent } from "src/components/recipeList/emptyRecipe/emptyRecipe.component";
import { RecipeEditComponent } from "src/components/recipeList/recipeEdit/recipeEdit.component";
import { RecipeDetailComponent } from "src/components/recipeList/recipeItem/recipeDetail/recipeDetail.component";
import { RecipeItemComponent } from "src/components/recipeList/recipeItem/recipeItem.component";
import { RecipeListComponent } from 'src/components/recipeList/recipeList.component';
import { ShopingCartComponent } from "src/components/shopingCart/shopingCart.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeListComponent, children: [
        {path: '', component: EmptyRecipeComponent, pathMatch: 'full'},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
    ]},
    {path: 'shoping-cart', component: ShopingCartComponent}
]



@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {

}