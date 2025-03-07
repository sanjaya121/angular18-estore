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

  getCart = () => {
    try {
      const cart = localStorage.getItem('cart');
      if (cart) {
        return JSON.parse(cart) as Cart;
      }
      else
        throw new Error("Basket not found on local storage")
    }
    catch (error) {
      throw new Error("Failed to retrieve the basket: " + error);
    }

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
    this.getCart();
  }

  calculateTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    this.totalQuantity = totalQuantity;

  }


}
