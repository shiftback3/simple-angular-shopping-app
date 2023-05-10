import { Currency } from "src/app/models/currency";

export class SwapCurrency {
    static readonly type = '[Currency] SwapCurrency';
    constructor(public payload: Currency ) {}
  }