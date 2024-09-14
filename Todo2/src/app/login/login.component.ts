import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {BasicAuthenticateService} from "../service/data/basic-authenticate.service";

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
              public basicAuthenticateService: BasicAuthenticateService) {
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
}
