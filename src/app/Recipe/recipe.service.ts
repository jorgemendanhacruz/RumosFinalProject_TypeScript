import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Recipe } from "./recipe";
import { RecipeCreate } from "./recipe-create";
import { RecipeEdit } from "./recipe-edit";
import { RecipeGetById } from "./recipe-get-by-id";

@Injectable({
    providedIn: 'root'
})
export class RecipeService{
    private apiUrl = 'https://localhost:7035/api/v1/recipe'
    constructor(private httpClient: HttpClient){}

    getRecipe() : Observable<Recipe[]> {
        return this.httpClient
                    .get<Recipe[]>(this.apiUrl)
                    .pipe();
    }

    createRecipe(recipe: RecipeCreate) : Observable<RecipeCreate> {
    
        return this.httpClient
            .post<RecipeCreate>(this.apiUrl, recipe);
    }
    getRecipeById(id: number) : Observable<RecipeGetById> {
        return this.httpClient
                    .get<RecipeGetById>(this.apiUrl + '/' + id)
                    .pipe();
    }

    editRecipe(recipe: RecipeEdit) : Observable<RecipeEdit> {
        return this.httpClient
            .put<RecipeEdit>(this.apiUrl + '/' + recipe.id, recipe)
    }
    deleteRecipe(id: number) : Observable<any> {
        return this.httpClient
                    .delete<any>(this.apiUrl + '/' + id);
    }

}