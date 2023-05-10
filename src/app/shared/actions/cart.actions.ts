import { Product } from "src/app/models/product";


  export class AddToCart {
    static readonly type = '[Cart] AddToCart';
    constructor(public payload: Product ) {}
  }

  export class RemoveFromCart {
    static readonly type = '[Cart] RemoveFromCart';
    constructor(public payload: Product ) {}
  }

  export class ClearCart {
    static readonly type = '[Cart] ClearCart';
  }