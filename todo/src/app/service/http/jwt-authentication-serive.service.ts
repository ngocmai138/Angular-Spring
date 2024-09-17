import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constants";
import {map} from "rxjs";
import {AUTHENTICATED_USER, AuthenticationBean, TOKEN} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationSeriveService {
  constructor(private http: HttpClient) {
  }

  // Login with username-password
  executeJwtAuthenticationService(username: any, password: any) {
    return this.http.post<any>(`${API_URL}authenticate`, {username, password})
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      )
  }

  //Login with Google
  loginWithGoogle(){
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const email = urlParams.get('email');

    if (token) {
      // Lưu token vào sessionStorage
      sessionStorage.setItem(AUTHENTICATED_USER, `${email}`);
      sessionStorage.setItem(TOKEN, `Bearer ${token}`);
    } else {
      console.log("No token found in URL");
    }
  }

  getAuthenticatedUser() {
    if (typeof sessionStorage !== 'undefined')
      return sessionStorage.getItem(AUTHENTICATED_USER);
    return null;
  }

  getAuthenticatedToken() {
    if (typeof sessionStorage !== 'undefined')
      return sessionStorage.getItem(TOKEN);
    return null;
  }

  isLoginIn() {
    let user;
    if (typeof sessionStorage !== 'undefined')
      user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    if (typeof sessionStorage !== 'undefined')
      sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}
