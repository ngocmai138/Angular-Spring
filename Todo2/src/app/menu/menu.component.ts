import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {NgIf} from "@angular/common";

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
  constructor(public hardcoreAuthenticationService: HardcoreAuthenticationService) {
  }
  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn=this.hardcoreAuthenticationService.isLoggedIn();
  }

}
