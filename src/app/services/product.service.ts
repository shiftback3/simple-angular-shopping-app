
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  index(){
    const url = "/assets/dummy-server/product.json"
   return this.http.get<Product>(url);
    
  }
show(){

}
  setProductDetails(data:Product){
    return localStorage.setItem('vendorDetails',JSON.stringify(data));
    }
    getProductDetails(){
    return JSON.parse(localStorage.getItem('vendorDetails') || '{}');
    }
}
