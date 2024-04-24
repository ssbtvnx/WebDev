import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BouquetListComponent } from './bouquet-list/bouquet-list.component';
import { BouquetDetailsComponent } from './bouquet-details/bouquet-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'cart', component: CartComponent, title: 'Cart'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'bouquet-list', component: BouquetListComponent, title: 'Bouquet-list'},
    {path: 'bouquet-details/:id', component: BouquetDetailsComponent, title: 'Bouquet-details'},
];
