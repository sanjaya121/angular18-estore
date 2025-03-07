import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';


import { ProductsComponent } from "../components/routes/products/products.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  /**
   *
   */
  constructor(private homeService: HomeService) {


  }


  ngOnInit(): void {

  }
}
