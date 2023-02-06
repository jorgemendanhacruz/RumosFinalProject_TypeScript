import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeCreateComponent } from "./recipe-create.component";
import { RecipeDeleteComponent } from "./recipe-delete.component";
import { RecipeDetailComponent } from "./recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit.component";
import { RecipeListComponent } from "./recipe-list.component";

const routes: Routes = [
    {
        path: 'recipe/create',
        component: RecipeCreateComponent
    },
    {    
        path: 'recipe',
        component: RecipeListComponent
    },
    {
        path: 'recipe/edit/:id',
        component: RecipeEditComponent
    },
    {
        path: 'recipe/delete/:id',
        component: RecipeDeleteComponent
    },
    {
        path: 'recipe/detail/:id',
        component: RecipeDetailComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipeRoutingModule{}