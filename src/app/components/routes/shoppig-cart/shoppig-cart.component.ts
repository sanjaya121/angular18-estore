import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { CartItem } from '../../../model/cart.model';

@Component({
  selector: 'app-shoppig-cart',
  standalone: true,
  imports: [],
  templateUrl: './shoppig-cart.component.html',
  styleUrl: './shoppig-cart.component.scss'
})
export class ShoppigCartComponent implements OnInit{
  /**
   *
   */

  cartItems:CartItem[]=[];
  constructor(private cartServices : CartService) {
  
    
  }
  ngOnInit(): void {
        this.cartServices.cartSubject.subscribe(items=>{
          this.cartItems=items;
        })
  }

}
