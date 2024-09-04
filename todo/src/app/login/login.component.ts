import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from '@angular/common'
import {Router} from "@angular/router";
import {HardcodeAuthenticationService} from "../service/hardcode-authentication.service";

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
  errorMessage='Invalid Credentials'
  invalidLogin=false;
  constructor(private router:Router, private hardcodeAuthenticationService:HardcodeAuthenticationService) {
  }
  handleClick(){
    if(this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin=false;
      this.router.navigate(['welcome', this.username])
    }else {
      this.invalidLogin=true;
    }
  }
}
