import { Currency } from './../../models/currency';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SwapCurrency } from "../actions/currency.actions";

export interface Currencies {
    id: number;
    name: string;
    symbol: string;

}

@State<Currencies[]>({
    name: 'currency',
    defaults: [
        { id: 1, symbol: "$", name: "USD" }
    ]
})

@Injectable()
export class CurrencyState {

    @Selector()
    static Currency(items: Currencies[]) {
        return items;
    }


    @Action(SwapCurrency)
    SwapCurrency(ctx: StateContext<Currencies[]>, action: SwapCurrency) {
        const state = action.payload;

        ctx.setState([
            state

        ]);

    }

}
