import {Component, OnInit} from '@angular/core';
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [],
  templateUrl: './login-success.component.html',
  styleUrl: './login-success.component.css'
})
export class LoginSuccessComponent implements OnInit{
  constructor(private jwtAuthenticationSeriveService:JwtAuthenticationSeriveService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.jwtAuthenticationSeriveService.loginWithGoogle();
    this.router.navigate(['welcome',this.jwtAuthenticationSeriveService.getAuthenticatedUser()?.toString()])
  }

}
