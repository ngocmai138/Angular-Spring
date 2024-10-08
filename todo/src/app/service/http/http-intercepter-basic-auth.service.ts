import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "./basic-authentication.service";
import {JwtAuthenticationService} from "./jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private authen: JwtAuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = this.authen.getAuthenticatedUser()
    let basicAuthHeaderString = this.authen.getAuthenticatedToken()
    if (username && basicAuthHeaderString) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(req)
  }
}
