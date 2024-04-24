
import { Component, Input, OnInit } from '@angular/core';
import { Bouquet, bouquets } from '../bouquets'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-bouquet-list',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],
  templateUrl: './bouquet-list.component.html',
  styleUrls: ['./bouquet-list.component.css']
})
export class BouquetListComponent implements OnInit{

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  bouquets: Bouquet[] = bouquets;
   // Здесь используется интерфейс Bouquet

   
}

