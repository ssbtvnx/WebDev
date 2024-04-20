import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'cart', component: CartComponent, title: 'Cart'},
    {path: 'about', component: AboutComponent, title: 'About'},
];
