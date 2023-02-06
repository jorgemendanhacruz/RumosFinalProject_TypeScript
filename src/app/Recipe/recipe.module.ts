import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipeCreateComponent } from "./recipe-create.component";
import { RecipeDeleteComponent } from "./recipe-delete.component";
import { RecipeDetailComponent } from "./recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit.component";
import { RecipeListComponent } from "./recipe-list.component";
import { RecipeRoutingModule } from "./recipe-routing.module";


@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipeRoutingModule],
    declarations:[
        RecipeListComponent,
        RecipeCreateComponent,
        RecipeEditComponent,
        RecipeDeleteComponent,
        RecipeDetailComponent
        ]
    
})

export class RecipeModule{}