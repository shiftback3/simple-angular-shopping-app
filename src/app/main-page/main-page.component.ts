import { AddToCart } from './../shared/actions/cart.actions';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { Select, Store } from '@ngxs/store';
import { CurrencyState } from '../shared/state/currency.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  products: Array<Product> = []
  selectedCurrency: any

  // set currency
  @Select(CurrencyState.Currency)
  Currency$!: Observable<any>;
  constructor(
    private productService: ProductService,
    private _router: Router,
    private store: Store,
  ) {
    this.Currency$.subscribe({
      next: (response) => this.selectedCurrency = response,
      error: (e) => console.log(e)

    })
    this.getProducts();
  }
  showDetails(data: Product) {
    this.productService.setProductDetails(data)
    this._router.navigate(['/product-details/', data.id])

  }

  // Get all Products
  getProducts() {
    this.productService.index().subscribe({
      next: (response) => this.responseSuccess(response),
      error: (e) => this.responseError(e)
    })
  }

  responseSuccess(response: any) {
    this.products = response


  }

  responseError(error: any) {
    console.log(error);

  }


  AddToCart(data: Product) {
    this.store.dispatch(new AddToCart(data));
    // console.log(data);

  }
}
