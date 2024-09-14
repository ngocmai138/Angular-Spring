import { Component } from '@angular/core';
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
export class MenuComponent {
  protected readonly NgIf = NgIf;
  constructor(public basicAuthenticationService:BasicAuthenticationService,
              public jwtAuthenticationSeriveService:JwtAuthenticationSeriveService) {
  }
}
