import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  redirectToTelegram() {
    const url = "http://localhost:4200/sezim-flowers/";
    const message = "Сафонов оплатить!";
    const telegramLink = `https://telegram.me/share/url?url=${url}&text=${message}`;
    window.open(telegramLink, '_blank');
  }
}

