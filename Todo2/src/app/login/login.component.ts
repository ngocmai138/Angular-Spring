import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username='mai'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin = false;
  constructor(public router:Router,
              public hardcoreAuthenticationService:HardcoreAuthenticationService) {
  }
  handleLogin(username:String, password:String){
    this.invalidLogin=this.hardcoreAuthenticationService.authenticate(username, password);
  }
}
