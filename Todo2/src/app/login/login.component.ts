import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {BasicAuthenticateService} from "../service/http/basic-authenticate.service";
import {JwtAuthenticateService} from "../service/http/jwt-authenticate.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'mai'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  constructor(public router: Router,
              public basicAuthenticateService: BasicAuthenticateService,
              public jwtAuthenticateService:JwtAuthenticateService) {
  }

  handleLogin(username: String, password: String) {
    this.basicAuthenticateService.authenticateUser(username, password).subscribe({
        next: () => {
          this.invalidLogin = false;
          this.router.navigate(['welcome',username])
        },
        error: () => this.invalidLogin = true
      }
    )
  }
  handleJwtLogin(username: String, password: String) {
    this.jwtAuthenticateService.authenticateUser(username, password).subscribe({
        next: () => {
          this.invalidLogin = false;
          this.router.navigate(['welcome',username])
        },
        error: () => this.invalidLogin = true
      }
    )
  }
}
