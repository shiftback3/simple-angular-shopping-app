import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CartState } from './shared/state/cart.state';
import { CurrencyState } from './shared/state/currency.state';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CartComponent,
    MainPageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgHeroiconsModule,
    HttpClientModule,
    NgxsModule.forRoot([CartState,CurrencyState]),
    NgxsStoragePluginModule.forRoot({
      key: ['cart','currency']

    }),
    NgxsStoragePluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
