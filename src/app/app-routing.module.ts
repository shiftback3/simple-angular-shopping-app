import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: MainPageComponent, data: { pageTitle: 'Main Page' } },
  { path: 'cart', component: CartComponent, data: { pageTitle: 'Cart page' } },
  { path: 'product-details/:id', component: ProductDetailsComponent, data: { pageTitle: 'Product Details' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
