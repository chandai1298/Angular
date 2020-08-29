import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/client/services/authen/user.model';

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
  formData: User;
  signup(formData){
    return this.http.post('https://localhost:44376/Users/signup',formData);
  }
  getRolesUsers(){
    return this.http.get('https://localhost:44376/Home/getRoles');
  }
}
