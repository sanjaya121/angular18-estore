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
   cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
   quantitySubject = new BehaviorSubject<any>(0);

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
    this.calculateTotalQuantity();
    this.quantitySubject.next(this.totalQuantity)
  }

  calculateTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    this.totalQuantity = totalQuantity;

  }


}
