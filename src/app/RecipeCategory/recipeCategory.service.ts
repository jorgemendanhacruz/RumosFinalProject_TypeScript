import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RecipeCategory } from "./recipeCategory";

@Injectable({
    providedIn: 'root'
})
export class RecipeCategoryService{
    private apiUrl = 'https://localhost:7035/api/v1/category'
    constructor(private httpClient: HttpClient){}

    getRecipeCategory() : Observable<RecipeCategory[]> {
        return this.httpClient
                    .get<RecipeCategory[]>(this.apiUrl)
                    .pipe();
    }
}