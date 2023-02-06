import { Component, OnInit } from "@angular/core";
import { DifficultyLevel } from "./difficultyLevel";
import { DifficultyLevelService } from "./difficultyLevel.service";


@Component({
    selector: 'cook-difficultylevellist',
    template: './difficultylevel-list.component.html'
})

export class DifficultyLevelListComponent implements OnInit {
    
    difficultyLevels: DifficultyLevel[] = [];
    constructor(private difficultyLevelService: DifficultyLevelService) {   //construtor para injetar o serviço

    }
    
    ngOnInit(): void {       //método para consumir o serviço onde estão guardados os dados
        this.difficultyLevelService.getDifficultyLevel().subscribe({    //subscribe - método próprio do angular responsável por fazer o binding do retorno da API
            next: (difficultyLevels) => {
                this.difficultyLevels = difficultyLevels
            }
        })
    }

    
    
}