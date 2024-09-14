import {Component, OnInit} from '@angular/core';
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";
import {BasicAuthenticateService} from "../service/data/basic-authenticate.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public basicAuthenticateService:BasicAuthenticateService) {
  }
  ngOnInit(): void {
    this.basicAuthenticateService.logout()
  }

}
