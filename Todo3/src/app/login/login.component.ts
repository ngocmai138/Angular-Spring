import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username='mai'
  password=''
  invalidLogin=false;
  errorMessage='Invalid Credential';
  constructor(public router: Router,
              public hardcoreAuthenticationService:HardcoreAuthenticationService) {
  }
  handleClick() {
    console.log(this.invalidLogin)
    this.invalidLogin = !this.hardcoreAuthenticationService.authenticate(this.username, this.password);
  }

}
