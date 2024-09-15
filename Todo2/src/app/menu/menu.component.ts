import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HardcoreAuthenticationService} from "../service/http/hardcore-authentication.service";
import {NgIf} from "@angular/common";
import {BasicAuthenticateService} from "../service/http/basic-authenticate.service";
import {JwtAuthenticateService} from "../service/http/jwt-authenticate.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  constructor(public basicAuthenticateService:BasicAuthenticateService,
              public jwtAuthenticateService:JwtAuthenticateService) {
  }
  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn=this.jwtAuthenticateService.isLogged();
  }

}
