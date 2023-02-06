import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IngredientListComponent } from "./ingredient-list.component";


const routes: Routes = [
    {    
        path: 'ingredient',
        component: IngredientListComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class IngredientRoutingModule{}