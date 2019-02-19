import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchComponent } from './search-component/search-component';
import { HeaderComponent } from './header-component/header-component';
import { SearchDrinksComponent } from './search-drinks/search-drinks';
import { HomeSlideComponent } from './home-slide/home-slide';
import { LoginComponent } from './login-component/login-component';
import { AppetizerComponent } from './appetizer-component/appetizer-component';
import { CardsComponent } from './cards-component/cards-component';

@NgModule({
    declarations:[
      SearchComponent,
      HeaderComponent,
      SearchDrinksComponent,
      HomeSlideComponent,
      LoginComponent,
    AppetizerComponent,
    CardsComponent,

    ],
    imports:[
        IonicModule
    ],
    exports:[
       SearchComponent,
       HeaderComponent,
       SearchDrinksComponent,
       HomeSlideComponent,
       LoginComponent,
    AppetizerComponent,
    CardsComponent

    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class ComponentsModule {

}

