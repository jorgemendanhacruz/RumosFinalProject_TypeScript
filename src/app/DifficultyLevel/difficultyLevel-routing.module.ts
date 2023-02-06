import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DifficultyLevelListComponent } from "./difficultyLevel-list.component";


const routes: Routes = [
    {    
        path: 'difficultylevel',
        component: DifficultyLevelListComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DifficultyLevelRoutingModule{}