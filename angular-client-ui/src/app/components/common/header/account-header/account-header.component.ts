import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../../../services/shared/shared.service';
import { CartService } from '../../../../services/cart/cart.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './account-header.component.html',
  styleUrl: './account-header.component.scss'
})
export class AccountHeaderComponent implements OnInit {

  constructor(private cartService: CartService) {  }

  totalQuantity = 0;
  ngOnInit(): void {
    this.getQuantity();

  }

  getQuantity = () => {
    this.cartService.quantitySubject.subscribe(quantity => {
      this.totalQuantity = quantity;
    })
  }

}
