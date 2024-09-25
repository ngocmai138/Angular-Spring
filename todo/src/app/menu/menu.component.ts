import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {BasicAuthenticationService} from "../service/http/basic-authentication.service";
import {JwtAuthenticationService} from "../service/http/jwt-authentication.service";

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
  constructor(public jwtAuthenticationService:JwtAuthenticationService) {
  }

  ngOnInit(): void {
    this.username = this.jwtAuthenticationService.getAuthenticatedUser()?.toString()
  }
}
