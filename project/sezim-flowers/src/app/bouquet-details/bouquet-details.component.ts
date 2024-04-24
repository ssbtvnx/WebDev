
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Bouquet } from '../bouquets'; // Предположим, что это ваш интерфейс Bouquet
import { bouquets } from '../bouquets';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bouquet-details',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './bouquet-details.component.html',
  styleUrls: ['./bouquet-details.component.css']
})
export class BouquetDetailsComponent implements OnInit {
  bouquet: Bouquet | undefined; // Объявляем свойство bouquet и указываем, что оно может быть undefined

  constructor(private route: ActivatedRoute, private cartService: CartService){

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bouquetIdFromRoute = Number(routeParams.get('id'));

    this.bouquet = bouquets.find(bouquet => bouquet.id === bouquetIdFromRoute)
  }

  addToCart(bouquet: Bouquet){
    this.cartService.addToCart(bouquet);
    window.alert('Added to cart successfuly!')
  }
}
