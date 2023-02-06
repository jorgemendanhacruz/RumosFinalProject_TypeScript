import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DifficultyLevelListComponent } from "./difficultyLevel-list.component";
import { DifficultyLevelRoutingModule } from "./difficultyLevel-routing.module";



@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        DifficultyLevelRoutingModule],
    declarations:[
        DifficultyLevelListComponent
        ]
})

export class DifficultyLevelModule{}