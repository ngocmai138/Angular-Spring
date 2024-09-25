import {Component, OnInit} from '@angular/core';
import {HardcodeAuthenticationService} from "../service/http/hardcode-authentication.service";
import {JwtAuthenticationService} from "../service/http/jwt-authentication.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public jwtAuthenticationSeriveService: JwtAuthenticationService) {
  }

  ngOnInit(): void {
    this.jwtAuthenticationSeriveService.logout();
  }
}
