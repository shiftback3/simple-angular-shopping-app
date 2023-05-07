import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CartComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgHeroiconsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
