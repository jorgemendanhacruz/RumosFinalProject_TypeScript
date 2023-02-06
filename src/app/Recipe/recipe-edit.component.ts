import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription, VirtualTimeScheduler } from "rxjs";
import { RecipeEdit } from "./recipe-edit";
import { RecipeGetById } from "./recipe-get-by-id";
import { RecipeService } from "./recipe.service";




@Component({
    templateUrl : './recipe-edit.component.html'
})

export class RecipeEditComponent implements OnInit{
    editForm: FormGroup
    sub: Subscription = Subscription.EMPTY;
    recipeId: number=0;
    recipe = {} as RecipeEdit;

    constructor(private recipeService : RecipeService,
                private formBuilder : FormBuilder,
                private route: ActivatedRoute) {
       
            this.editForm = this.formBuilder.group({
                amount: [
                    null,
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(80)
                    ]
                ]
            });
    }
    ngOnInit(): void {
        this.sub = this.route.paramMap.subscribe((params) => {
            this.recipeId = Number(params.get('id'));
            this.getRecipeById(this.recipeId);
        });
        
    }

    getRecipeById(id:number){
        this.recipeService
            .getRecipeById(id)
            .subscribe({
                next: (recipe) => this.displayRecipe(recipe)
            });


    }

    displayRecipe(recipe : RecipeGetById) : void {
        if(this.editForm) {
            this.editForm.reset();
        }
            this.editForm.patchValue({
            execution: recipe.execution
            })
    }

    edit() : void {
        this.recipe = { ...this.recipe, ...this.editForm.value};
        this.recipe.id = this.recipeId;
            this.recipeService
            .editRecipe(this.recipe)
            .subscribe();
    }
}