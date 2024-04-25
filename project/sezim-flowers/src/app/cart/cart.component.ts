import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart-service.service';
import { Bouquet } from '../bouquets';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart', 
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],
})

export class CartComponent implements OnInit{
  items : Bouquet[] = []

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.cartService.getItems())
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  clearCart(){
    this.items = this.cartService.clearCart();
  }

}