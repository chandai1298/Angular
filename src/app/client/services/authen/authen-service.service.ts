import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from "@angular/common/http"
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenServiceService {
  formData: User;
  readonly rootUrl = 'https://localhost:44376/Home/';

  constructor(private fb: FormBuilder,private http:HttpClient,private router: Router) { }

  userForm=this.fb.group({
    id:[0],
    firstName:[''],
    lastName:[''],
    username:[''],
    password:['']

  });

  checkLogin(formData:User){
    return this.http.post('https://localhost:44376/Users/authenticate',formData);
  }
  
  
  signup(formData){
    return this.http.post('https://localhost:44376/Users/signup',formData);
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }
  loggedIn() {

    return (localStorage.getItem('token') !== null)    
  }

  getToken() {
    return localStorage.getItem('token')
  }
 
  checkUserName(formData){
    return this.http.post('https://localhost:44376/Users/checkUserName',formData);
  }

}
