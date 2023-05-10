import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient,
  ) { }

  index(){
    const url = "/assets/dummy-server/currency.json"
   return this.http.get<Currency>(url);
    
  }
}
