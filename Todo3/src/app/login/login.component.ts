import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {NgIf} from "@angular/common";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username=''
  password=''
  invalidLogin=false;
  errorMessage='Invalid Credential';
  constructor(public router: Router,
              public basicAuthenticationService:BasicAuthenticationService) {
  }
  basicAuthenHandleClick(){
    this.basicAuthenticationService.authenticateUser(this.username, this.password).subscribe({
      next:()=>{
        this.router.navigate(['welcome',this.username]);
      },
      error:(err)=>{
        this.invalidLogin = true;
        console.error(err)
      }
    })
  }

}
