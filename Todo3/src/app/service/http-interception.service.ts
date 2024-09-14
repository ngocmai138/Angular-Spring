import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptionService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.basicAuthenticationService.getToken()
    let username = this.basicAuthenticationService.getUsername()
    if (token && username) {
      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(req)
  }
}
