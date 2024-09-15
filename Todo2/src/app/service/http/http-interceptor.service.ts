import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticateService} from "./basic-authenticate.service";
import {JwtAuthenticateService} from "./jwt-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthenticateService:BasicAuthenticateService,
              private jwtAuthenticateService:JwtAuthenticateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = this.jwtAuthenticateService.getAuthenticatedUser()
    let token = this.jwtAuthenticateService.getToken()
    if(username && token){
      req = req.clone(
        {
          setHeaders:{
            Authorization:token
          }
        }
      )
    }
      return next.handle(req)
  }
}
