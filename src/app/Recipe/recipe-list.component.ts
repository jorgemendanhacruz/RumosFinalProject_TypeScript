import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe.service";

@Component({
    selector: 'cook-recipelist',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
    
    pageTitle: string = 'Recipe List'    //propriedades a serem carregadas no binding do html
    recipes: Recipe[] = [];
    constructor(private recipeService: RecipeService) {   //construtor para injetar o serviço

    }
    
    ngOnInit(): void {       //método para consumir o serviço onde estão guardados os dados
        this.recipeService.getRecipe().subscribe({    //subscribe - método próprio do angular responsável por fazer o binding do retorno da API
            next: (recipes) => {
                this.recipes = recipes
            }
        })
    }

    
    
}