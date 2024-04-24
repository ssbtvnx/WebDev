import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/login/`,
      {username, password}
    )
  }

}
