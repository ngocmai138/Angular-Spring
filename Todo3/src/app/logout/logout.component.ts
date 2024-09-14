import {Component, OnInit} from '@angular/core';
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public basicAuthenticationService:BasicAuthenticationService) {
  }

  ngOnInit(): void {
    this.basicAuthenticationService.logout()
  }
}
