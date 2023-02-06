import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DifficultyLevel } from "./difficultyLevel";

@Injectable({
    providedIn: 'root'
})
export class DifficultyLevelService{
    private apiUrl = 'https://localhost:7035/api/v1/level'
    constructor(private httpClient: HttpClient){}

    getDifficultyLevel() : Observable<DifficultyLevel[]> {
        return this.httpClient
                    .get<DifficultyLevel[]>(this.apiUrl)
                    .pipe();
    }
}