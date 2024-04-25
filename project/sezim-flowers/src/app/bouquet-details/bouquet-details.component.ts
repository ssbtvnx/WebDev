import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Bouquet } from '../bouquets'; // Предположим, что это ваш интерфейс Bouquet
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-bouquet-details',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './bouquet-details.component.html',
  styleUrls: ['./bouquet-details.component.css']
})
export class BouquetDetailsComponent implements OnInit {
  bouquet: Bouquet | undefined; // Объявляем свойство bouquet и указываем, что оно может быть undefined

  constructor(private route: ActivatedRoute, private cartService: CartService,
              private backendService: BackendService){
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const bouquetIdFromRoute = Number(routeParams.get('id'));
    this.backendService.getBouquetById(bouquetIdFromRoute).subscribe(
      bouquet => {
        this.bouquet = bouquet
      }
    )
  }

  addToCart(bouquet: Bouquet){
    this.cartService.addToCart(bouquet);
    console.log(this.cartService.getItems())
    window.alert('Added to cart successfuly!')
  }
}