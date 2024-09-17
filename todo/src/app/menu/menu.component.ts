import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {BasicAuthenticationService} from "../service/http/basic-authentication.service";
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  username?:any
  protected readonly NgIf = NgIf;
  constructor(public basicAuthenticationService:BasicAuthenticationService,
              public jwtAuthenticationSeriveService:JwtAuthenticationSeriveService) {
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationSeriveService.getAuthenticatedUser()?.toString()
  }
}
