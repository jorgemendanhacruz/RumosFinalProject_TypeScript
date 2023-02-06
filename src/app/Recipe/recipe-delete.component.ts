import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { RecipeGetById } from "./recipe-get-by-id";
import { RecipeService } from "./recipe.service";

@Component({
    templateUrl : './recipe-delete.component.html'
})


export class RecipeDeleteComponent implements OnInit {
    recipeId : number = 0;
    sub: Subscription = Subscription.EMPTY;
    recipe = {} as RecipeGetById;
    deleteForm: FormGroup;

    constructor(
        private recipeService : RecipeService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) {
            this.recipeId = 0;

            this.deleteForm = this.formBuilder.group({
            });
        }

        ngOnInit(): void {
            this.sub = this.route.paramMap.subscribe((params) => {
                this.recipeId = Number(params.get('id'));
                this.recipeService
                    .getRecipeById(this.recipeId)
                    .subscribe({
                        next: (recipe) => this.recipe = recipe
                    });
            });
    
}

delete() : void{
    console.log(this.recipe); 
    this.recipeService
        .deleteRecipe(this.recipeId)
        .subscribe();
}
    
}