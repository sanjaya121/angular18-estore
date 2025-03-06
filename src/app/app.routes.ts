import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/routes/products/product-details/product-details.component';
import { ShoppigCartComponent } from './components/routes/shoppig-cart/shoppig-cart.component';

export const routes: Routes = [
    {
        path:"",
        loadChildren:()=>import('./home/home.module').then(module=>module.HomeModule)
    },
    {
        path:"products/:id",
        component:ProductDetailsComponent,
        title:"Product Details"
    },
    {
        path:"shopping-cart",
        component:ShoppigCartComponent,
        title:"Shpping Cart"
    }

];
