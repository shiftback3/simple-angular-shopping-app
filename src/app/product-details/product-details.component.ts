import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddToCart } from '../shared/actions/cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product!: Product
  constructor(
    private productService: ProductService,
    private _router: Router,
    private store: Store
  ) {
    this.getProduct();
  }

  // Get all Products
  getProduct() {
    this.product = this.productService.getProductDetails()
    console.log(this.product);

  }

  AddToCart(data: Product) {
    this.store.dispatch(new AddToCart(data));
    // console.log(data);

  }
}
