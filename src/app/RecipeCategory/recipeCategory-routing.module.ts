import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeCategoryListComponent } from "./recipeCategory-list.component";


const routes: Routes = [
    {    
        path: 'recipeCategory',
        component: RecipeCategoryListComponent
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipeCategoryRoutingModule{}