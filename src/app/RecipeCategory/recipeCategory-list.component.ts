import { Component, OnInit } from "@angular/core";
import { RecipeCategory } from "./recipeCategory";
import { RecipeCategoryService } from "./recipeCategory.service";


@Component({
    selector: 'cook-ingredientlist',
    template: './recipecategory-list.component.html'
})

export class RecipeCategoryListComponent implements OnInit {
    
    recipecategories: RecipeCategory[] = [];
    constructor(private reciceCategoryService: RecipeCategoryService) {   //construtor para injetar o serviço

    }
    
    ngOnInit(): void {       //método para consumir o serviço onde estão guardados os dados
        this.reciceCategoryService.getRecipeCategory().subscribe({    //subscribe - método próprio do angular responsável por fazer o binding do retorno da API
            next: (recipeCategories) => {
                this.recipecategories = recipeCategories
            }
        })
    }

    
    
}