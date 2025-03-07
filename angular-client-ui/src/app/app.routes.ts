import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/routes/products/product-details/product-details.component';
import { ShoppigCartComponent } from './components/routes/shoppig-cart/shoppig-cart.component';
import { JSPracticeComponent } from './components/routes/jspractice/jspractice.component';
import { CodilityComponent } from './components/routes/codility/codility.component';

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
    },
    {
        path:"js-challenge",
        component:JSPracticeComponent,
        title:"JS Challenge"
    },
    {
        path:"codility-challenge",
        component:CodilityComponent,
        title:"JS Challenge"
    }

];
