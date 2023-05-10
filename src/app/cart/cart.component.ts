import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CartState } from '../shared/state/cart.state';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { AddToCart, RemoveFromCart } from '../shared/actions/cart.actions';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CurrencyService } from '../services/currency.service';
import { Currency } from '../models/currency';
import { CurrencyState } from '../shared/state/currency.state';
import { SwapCurrency } from '../shared/actions/currency.actions';
declare let PaystackPop: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  currencies: any
  selectedCurrency: any
  cartItems: Array<Product> = []// set Cart Items
  CartCount!: Number // set total cart count
  CartTotal!: Number // set total cart total amount

// set currency
@Select(CurrencyState.Currency)
Currency$!: Observable<any>;


  @Select(CartState.totalQuantity)
  totalQuantity$!: Observable<any>;

  @Select(CartState.cartItems)
  totalCart$!: Observable<any>;

// total cart price
  @Select(CartState.totalPrice)
  totalPrice$!: Observable<any>;

  constructor(
    private store: Store,
    private productService: ProductService,
    private _router: Router,
    private currency: CurrencyService

  ) {


    

this.Currency$.subscribe({
  next: (response) => this.selectedCurrency = response,
  error: (e) => console.log(e)
  
})

    this.totalCart$.subscribe({
      next: (response) => this.cartItems = response,
      error: (e) => console.log(e)
      
  })
    // set the total quantity from store
    this.totalQuantity$.subscribe({
      next: (response) => this.CartCount = response,
      error: (e) => console.log(e)
      
  })
// set the total price from the cart store
  this.totalPrice$.subscribe({
    next: (response) => this.CartTotal = response,
    error: (e) => console.log(e)
    
})
}


AddToCart(data:Product) {
  this.store.dispatch(new AddToCart(data));
  
}


RemoveFromCart(data:Product) {
  this.store.dispatch(new RemoveFromCart(data));
}

showDetails(data: Product){
  this.productService.setProductDetails(data)
    this._router.navigate(['/product-details/', data.id])
    
  }

responseSuccess(response: any){
  this.currencies = response
  

}

responseError(error: any){
  console.log(error);
 
}


payWithPaystack(){
  let self = this;
  // alert('hello')
  let handler = PaystackPop.setup({
    key: 'pk_test_f96aa1f8f001b6d26c1b1e6ebdc392d2429af8bf', // Replace with your public key
    email: 'shiftback3@gmail.com',
    amount: Number(this.CartTotal) * 100,
    ref: 'PYL-'+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      // alert('Window closed.');
  

    },
    callback: function(response:any){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
          
        },
        err: (e:any) => {
          console.log(e);
          
        }
        
      
  
});
handler.openIframe();
}
}
