import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  standalone: true
})
export class LoginComponent implements OnInit{

  logged: boolean = false;
  username: string = "";
  password: string = "";


  constructor(private loginService: LoginService,
              private router: Router
  ) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("access"));
    const access = localStorage.getItem("access");
    if(access) {
      this.logged = true;
    }
  }

  login() {
    this.loginService.login(this.username, this.password)
    .subscribe( data => {
      this.logged = true;
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      this.router.navigate(['']);
    })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    console.log(localStorage.getItem("access"))
  }

}