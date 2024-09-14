import {Component, OnInit} from '@angular/core';
import {HardcodeAuthenticationService} from "../service/http/hardcode-authentication.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public hardcodeAuthenticationService:HardcodeAuthenticationService) {
  }

  ngOnInit(): void {
    this.hardcodeAuthenticationService.logout();
  }
}
