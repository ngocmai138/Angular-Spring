import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {NgIf} from "@angular/common";
import {BasicAuthenticateService} from "../service/data/basic-authenticate.service";

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
  constructor(public basicAuthenticateService:BasicAuthenticateService) {
  }
  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn=this.basicAuthenticateService.isLogged();
  }

}
