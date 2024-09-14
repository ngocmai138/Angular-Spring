import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {NgIf} from "@angular/common";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

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
export class MenuComponent {
  constructor(public basicAuthenticationService:BasicAuthenticationService) {
  }
}
