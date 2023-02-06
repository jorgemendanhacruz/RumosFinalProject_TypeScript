import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IngredientListComponent } from "./ingredient-list.component";
import { IngredientRoutingModule } from "./ingredient-routing.module";


@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        IngredientRoutingModule],
    declarations:[
        IngredientListComponent,
        ]
    
})

export class IngredientModule{}