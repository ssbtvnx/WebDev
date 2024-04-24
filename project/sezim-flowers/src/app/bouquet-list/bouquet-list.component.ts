import { Component, Input, OnInit } from '@angular/core';
import { Bouquet } from '../bouquets'; // Импортируем интерфейс Bouquet
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-bouquet-list',
  standalone: true,
  imports:[CommonModule, FormsModule, RouterModule],
  templateUrl: './bouquet-list.component.html',
  styleUrls: ['./bouquet-list.component.css']
})
export class BouquetListComponent implements OnInit{
  bouquets: Bouquet[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getBouquets().subscribe(
      bouquets => {
        this.bouquets = bouquets
      }
    )
  }

   // Здесь используется интерфейс Bouquet
}

