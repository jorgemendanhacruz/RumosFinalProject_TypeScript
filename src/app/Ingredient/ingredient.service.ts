import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ingredient } from "./ingredient";

@Injectable({
    providedIn: 'root'
})
export class IngredientService{
    private apiUrl = 'https://localhost:7035/api/v1/ingredient'
    constructor(private httpClient: HttpClient){}

    getIngredient() : Observable<Ingredient[]> {
        return this.httpClient
                    .get<Ingredient[]>(this.apiUrl)
                    .pipe();
    }
}