import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import * as jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: boolean = false;
  currentUser: any;

  constructor(private router: Router, private http: HttpClient) { 

    let user = localStorage.getItem("currentUser");
    if(user){
      this.currentUser = JSON.parse(user);
      this.loginStatus = true;
    }
  }

  login(data) {
    // Do all login related activity
    let url: string = "https://reqres.in/api/login";
    this.http.post(url, data).subscribe(
      (data) => {
        console.log(data);
        let token = data['token'];

        if (token == "QpwL5tke4Pnpja7X4") {
          token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1cmwiOiJodHRwczovL21heGNkbi5pY29uczguY29tL1NoYXJlL2ljb24vVXNlcnMvL3VzZXJfbWFsZV9jaXJjbGVfZmlsbGVkMTYwMC5wbmcifQ.3TrmzyAyiZdJLBCSjZqefwq5m2ilKpxq7oTepL45Row";
        }

        let user = jwtDecode(token);
        this.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));

        console.log(this.currentUser);

        this.loginStatus = true;
        this.router.navigate(['/admin']);
      },
      (error) => {
        console.log(error);
      }
    );


  }

  logout() {
    this.loginStatus = false;
    this.currentUser = "";
    localStorage.removeItem("currentUser");
    alert("Logout successful");
  }

  isAuthenticated(): boolean {
    return this.loginStatus;
  }
}
