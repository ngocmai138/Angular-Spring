import {Component, OnInit} from '@angular/core';
import {HardcodeAuthenticationService} from "../service/http/hardcode-authentication.service";
import {JwtAuthenticationSeriveService} from "../service/http/jwt-authentication-serive.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  constructor(public jwtAuthenticationSeriveService: JwtAuthenticationSeriveService) {
  }

  ngOnInit(): void {
    this.jwtAuthenticationSeriveService.logout();
  }
}
