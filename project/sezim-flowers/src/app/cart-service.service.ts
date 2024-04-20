import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bouquet } from './bouquet';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Bouquet[] = [];
/* . . . */
    constructor(
    private http: HttpClient
  ) {}

  addToCart(bouquet: Bouquet) {
    this.items.push(bouquet);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

/* . . . */
}