import {Component, OnInit} from '@angular/core';
import {HardcoreAuthenticationService} from "../service/hardcore-authentication.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public hardcoreAuthenticationService:HardcoreAuthenticationService) {
  }

  ngOnInit(): void {
    this.hardcoreAuthenticationService.logout();
  }
}
