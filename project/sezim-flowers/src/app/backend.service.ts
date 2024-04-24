import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl: string = 'http://127.0.0.1:8000/api/'

  constructor(private http : HttpClient) { }

  getBouquets():Observable <any>{
    const url = `${this.apiUrl}bouquet/` ;
    return this.http.get<any>(url)
  }

  getBouquetById(id: number): Observable<any> {
    const url = `${this.apiUrl}bouquet/${id}/`;
    return this.http.get<any>(url)
  }

}
