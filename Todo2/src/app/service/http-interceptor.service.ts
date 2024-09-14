import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticateService} from "./data/basic-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthenticateService:BasicAuthenticateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = this.basicAuthenticateService.getAuthenticatedUser()
    let token = this.basicAuthenticateService.getToken()
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
