import { Component, OnInit } from "@angular/core";
import { Ingredient } from "./ingredient";
import { IngredientService } from "./ingredient.service";

@Component({
    selector: 'cook-ingredientlist',
    template: './ingredient-list.component.html'
})

export class IngredientListComponent implements OnInit {
    
    ingredients: Ingredient[] = [];
    constructor(private ingredientService: IngredientService) {   //construtor para injetar o serviço

    }
    
    ngOnInit(): void {       //método para consumir o serviço onde estão guardados os dados
        this.ingredientService.getIngredient().subscribe({    //subscribe - método próprio do angular responsável por fazer o binding do retorno da API
            next: (ingredients) => {
                this.ingredients = ingredients
            }
        })
    }

    
    
}