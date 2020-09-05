import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "src/app/client/services/authen/user.model";

@Injectable({
  providedIn: "root",
})
export class GetAPIService {
  data: any;
  rootUrl = "https://192.168.0.102:5001/Home";
  rootUrl2 = "https://192.168.0.102:5001/Users";

  constructor(private http: HttpClient, private router: Router) {}

  getDataUsers() {
    return this.http.get(`${this.rootUrl}/Index`);
  }
  formData: User;
  signup(formData) {
    return this.http.post(`${this.rootUrl2}/signup`, formData);
  }
  getRolesUsers() {
    return this.http.get(`${this.rootUrl}/getRoles`);
  }
}
