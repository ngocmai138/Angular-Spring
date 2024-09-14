import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from '@angular/common'
import {Router} from "@angular/router";
import {HardcodeAuthenticationService} from "../service/http/hardcode-authentication.service";
import {BasicAuthenticationService} from "../service/http/basic-authentication.service";
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username?:any
  password?:any
  errorMessage='Invalid Credentials'
  invalidLogin=false;
  constructor(private router:Router,
              private hardcodeAuthenticationService:HardcodeAuthenticationService,
              private basicAuthenticateService:BasicAuthenticationService,
              private jwtAuthenticationSeriveService:JwtAuthenticationSeriveService) {
  }
  handleClick(){
    if(this.hardcodeAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin=false;
      this.router.navigate(['welcome', this.username])
    }else {
      this.invalidLogin=true;
    }
  }
  handleBasicAuthLogin(){
    this.basicAuthenticateService
        .executeBasicAuthenticationService(this.username, this.password)
        .subscribe(
          {
          next:()=>{
            this.invalidLogin=false;
            this.router.navigate(['welcome', this.username]);
          },
          error:()=>{
            this.invalidLogin=true
          }
          }
    );
  }
  handleJwtAuthLogin(){
    this.jwtAuthenticationSeriveService
      .executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        {
          next:()=>{
            this.invalidLogin=false;
            this.router.navigate(['welcome', this.username]);
          },
          error:()=>{
            this.invalidLogin=true
          }
        }
      );
  }
}
