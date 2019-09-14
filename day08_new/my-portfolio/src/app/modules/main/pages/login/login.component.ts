import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "eve.holt@reqres.in";
  password: string = "cityslicka";

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  OnSubmit(formdata: NgForm){
    // Do All validation
    console.log(formdata.value);
    this.auth.login(formdata.value);
  }
}
