import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddToCart, ClearCart, RemoveFromCart } from "../actions/cart.actions";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  @State<CartItem[]>({
    name: 'cart',
    defaults: []
  })

  @Injectable()
  export class CartState {

    @Selector()
    static cartItems(items: CartItem[]){
      return items;
    }
    @Selector()
    static totalQuantity(items: CartItem[]): number {
      return items.reduce((total, item) => total + item.quantity, 0);
    }
  
    @Selector()
    static totalPrice(items: CartItem[]): number {
      return items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    @Action(AddToCart)
    addToCart(ctx: StateContext<CartItem[]>, action: AddToCart) {
      const state = ctx.getState();
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        state[state.indexOf(existingItem)] = {
            ...existingItem,
            quantity: existingItem.quantity + 1
          }
        ctx.setState([
          ...state
      
        ]);
    

      } else {
        ctx.setState([...state, { ...action.payload, quantity: 1 }]);
      }
    }
  
    @Action(RemoveFromCart)
    removeFromCart(ctx: StateContext<CartItem[]>, action: RemoveFromCart) {
      const state = ctx.getState();
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const item = state[index];
        if (item.quantity === 1) {
          ctx.setState([...state.slice(0, index), ...state.slice(index + 1)]);
        } else {
            state[index] = {
                ...item,
                quantity: item.quantity - 1
              }
          ctx.setState([
            ...state
         
          ]);
        }
      }
    }
  
    @Action(ClearCart)
    clearCart(ctx: StateContext<CartItem[]>) {
      ctx.setState([]);
    }
  }
  