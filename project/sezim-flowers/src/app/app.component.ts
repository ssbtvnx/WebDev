import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// @NgModule({
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     RouterModule.forRoot([{ path: '', component: HomeComponent },
//     {path: 'cart', component:AboutComponent},
//     ]),
//   ],
//   declarations: [
//     HomeComponent,
//     AboutComponent,
//   ],
//   bootstrap: [AppComponent],
// })

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterModule,
    TopBarComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', }
)

export class AppComponent {
  title = 'FlowerShop';
}
