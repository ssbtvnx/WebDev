import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrollImages();
  }

  scrollImages() {
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const boutiquePhoto = document.querySelector('.boutique-photo');
  
    if (scrollLeftButton && scrollRightButton && boutiquePhoto) {
      scrollLeftButton.addEventListener('click', () => {
        boutiquePhoto.scrollLeft -= 100; // Adjust scroll amount as needed
      });
  
      scrollRightButton.addEventListener('click', () => {
        boutiquePhoto.scrollLeft += 100; // Adjust scroll amount as needed
      });
    }
  }}
