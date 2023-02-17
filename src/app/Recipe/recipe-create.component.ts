import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { subscribeOn } from "rxjs";
import { DifficultyLevel } from "../DifficultyLevel/difficultyLevel";
import { DifficultyLevelService } from "../DifficultyLevel/difficultyLevel.service";
import { Ingredient } from "../Ingredient/ingredient";
import { IngredientService } from "../Ingredient/ingredient.service";
import { RecipeCategory } from "../RecipeCategory/recipeCategory";
import { RecipeCategoryService } from "../RecipeCategory/recipeCategory.service";
import { RecipeCreate } from "./recipe-create";
import { RecipeService } from "./recipe.service";


@Component({
    templateUrl: './recipe-create.component.html'
})

export class RecipeCreateComponent implements OnInit {
    createForm: FormGroup;
    recipe = {} as RecipeCreate;
    difficultyLevels: DifficultyLevel[] = [];
    ingredients: Ingredient[] = [];
    categories: RecipeCategory[] = [];


    constructor(
        private recipeService: RecipeService,
        private formBuilder: FormBuilder,
        private difficultyLevelService: DifficultyLevelService,
        private ingredientService: IngredientService,
        private categoryService: RecipeCategoryService) {
            this.createForm = this.formBuilder.group({
                difficultyLevel: [
                    null, [Validators.required]],
                ingredient: [
                    null, [Validators.required]],
                recipeCategory: [
                    null, [Validators.required]],
                name: [
                    null,
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(80)
                    ]
                ],
                cookingTime: [
                    null,
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(80)
                    ]
                ],
                execution: [
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
        this.difficultyLevelService.getDifficultyLevel().subscribe({
            next: difficultyLevels => this.difficultyLevels = difficultyLevels
        })
        this.ingredientService.getIngredient().subscribe({
            next: ingredients => { 
                console.log(ingredients)
                this.ingredients = ingredients
            }
        })
        /*this.categoryService.getRecipeCategory().subscribe({
            next: recipeCategories => this.categories = recipeCategories
        })*/
    }

        create() {
            
            this.recipe = { ...this.recipe, ...this.createForm.value};
            console.log(this.recipe);
            // TODO call API POST to create new recipe
        }
}

        
