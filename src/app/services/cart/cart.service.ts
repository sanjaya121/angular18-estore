import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../../model/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  totalQuantity: number = 0;;
  cart: Cart[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  private quantitySubject = new BehaviorSubject(0);

  constructor() { }

  setCart = () => {


  }

  addToCart = (item: CartItem) => {
    const existingItem = this.cartItems.find((i) => i.id == item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    }
    else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);
    this.calculateTotalQuantity(this.cartItems)

  }

  calculateTotalQuantity = (cartitems: any) => {
    let totalQuantity = 0;
    for (const item of cartitems) {
      totalQuantity += item.quantity;
    }
    this.totalQuantity = totalQuantity;
  }
}
