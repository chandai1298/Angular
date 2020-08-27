import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  data: any;
  readonly rootUrl = 'https://localhost:44376/Home/';

  constructor(private http:HttpClient,private router: Router) {
   }

  

  getDataUsers(){
    return this.http.get('https://localhost:44376/Home/Index');
  }
  
}
