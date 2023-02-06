import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipeCategoryListComponent } from "./recipeCategory-list.component";
import { RecipeCategoryRoutingModule } from "./recipeCategory-routing.module";



@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipeCategoryRoutingModule],
    declarations:[
        RecipeCategoryListComponent,
        ]
})

export class RecipeCategoryModule{}