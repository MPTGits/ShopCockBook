import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/models/ingredient/ingredient.model';
import { RecipeService } from 'src/services/recipe.service';


@Component({
  selector: 'recipe-edit',
  templateUrl: './recipeEdit.component.html',
  styleUrls: ['./recipeEdit.component.css']
})
export class RecipeEditComponent {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

constructor(private route: ActivatedRoute,
            private recipeService: RecipeService){}

ngOnInit(){
  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
     }
  )
}

onSubmit(){

}

private initForm() {
  let recipeName = '';
  let recipeImgPath = '';
  let recipeDescription = '';
  let ingredients = new FormArray([]);

  if(this.editMode){
    const recipe = this.recipeService.getRecipeById(this.id);
    recipeName = recipe.name;
    recipeImgPath = recipe.imgPath;
    recipeDescription = recipe.description;
    if(recipe['ingredients']){
      for(let ingredient of recipe.ingredients){
        ingredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        )
      }
    }
  }


  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImgPath, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': ingredients
  });
}

get controls() { 
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

onAddIngredient(){
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    })
  )
}

}
