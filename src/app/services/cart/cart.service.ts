import { Injectable } from '@angular/core';
import { CartItem } from '../../model/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems)
  constructor() { }

  addToCart = (item: CartItem) => {
    const existingItem = this.cartItems.find((i) => i.id == item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    }
    else {
      this.cartItems.push(item);
    }
    this.cartSubject.next(this.cartItems);

  }
}
