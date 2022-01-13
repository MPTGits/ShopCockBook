import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'recipe-edit',
  templateUrl: './recipeEdit.component.html',
  styleUrls: ['./recipeEdit.component.css']
})
export class RecipeEditComponent {
  id: number;
  editMode = false;

constructor(private route: ActivatedRoute){}

ngOnInit(){
  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
     }
  )
}

}
