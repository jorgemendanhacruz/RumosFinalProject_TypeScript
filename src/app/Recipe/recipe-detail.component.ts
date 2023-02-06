import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription, VirtualTimeScheduler } from "rxjs";
import { RecipeGetById } from "./recipe-get-by-id";
import { RecipeService } from "./recipe.service";


@Component({
    templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent implements OnInit{
    sub: Subscription = Subscription.EMPTY;
    recipeId : number = 0;
    recipe = {} as RecipeGetById;
    detailForm : FormGroup;


    constructor(private recipeService : RecipeService,
                private route: ActivatedRoute,
                private formbuilder : FormBuilder,
                private router: Router) {
            
                this.detailForm = this.formbuilder.group ({});            
        
        }
    ngOnInit(): void {
        this.sub = this.route.paramMap.subscribe((params) => {
            this.recipeId = Number(params.get('id'));
            this.recipeService.getRecipeById(this.recipeId)
                .subscribe({
                    next : (recipe) => this.recipe = recipe
                });
        })
    }

    edit() : void{
        this.router.navigate(['/recipe/edit' , this.recipeId])
    }
}