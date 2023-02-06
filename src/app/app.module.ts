import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './Recipe/recipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DifficultyLevelModule } from './DifficultyLevel/difficultyLevel.module';
import { IngredientModule } from './Ingredient/ingredient.module';
import { RecipeCategoryModule } from './RecipeCategory/recipeCategory.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,
    RecipeModule,
    DifficultyLevelModule,
    IngredientModule,
    RecipeCategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
