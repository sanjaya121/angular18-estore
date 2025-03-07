import { Component } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Products } from '../../../model/products.model';
import { ProductService } from '../../../services/products.service';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../../services/shared/shared.service';
import { CartService } from '../../../services/cart/cart.service';
import { CartItem } from '../../../model/cart.model';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatProgressSpinnerModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  /**
   *
   */
  constructor(
    private productService: ProductService,
    private sharedService:SharedService,
    private cartService:CartService
  ) {


  }
  initialProductData: Products[] = [];
  products: Products[] = [];
  isloading = true;

  searchText=""
  ngOnInit(): void {
    console.log("HOme component loaded");
    this.getProductsData();
    this.getSerachText();
  }

  getProductsData = () => {
    this.productService.getProducts().subscribe((products: any) => {
      // console.log("Products", products)
      if (products) {
        this.getItemsToDisplay(products);
        this.isloading = false;
        this.initialProductData = products;
      }

    })
  }

  getItemsToDisplay = (products: any) => {
    let numberOfItem = 12;
    this.products = products.slice(0, numberOfItem);
    console.log("Items ", this.products);

  }

  loadMore = (n: number) => {

    this.products = this.initialProductData.slice(0, this.products.length + n);
    console.log("load more", this.products);

  }
  getSerachText=()=>{
    this.sharedService.searchText.subscribe(text=>{
      this.searchText=text;
      // this.searchProducts(text);
    })
  }

  searchProducts=(text:string)=>{
    return this.products.filter(product =>product.name.toLowerCase().includes(text.toLowerCase()))
  }

  addToCart=(product:any,quantity:number)=>{
    const cartItem:CartItem={
      id:product.id,
      name:product.name,
      quantity:quantity,
      price:product.price,
      image:product.image
      
    }
    this.cartService.addToCart(cartItem);
  

  }
  
}
