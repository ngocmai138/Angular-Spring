import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
export class AuthenticateBean{
  constructor(message:String) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticateService {

  constructor(private http:HttpClient) { }
  authenticateUser(username:any, password:any){
    let headerString = 'Basic '+window.btoa(username+':'+password)
    let headers = new HttpHeaders({
      Authorization:headerString
      }
    )
    return this.http.get<AuthenticateBean>(`http://localhost:8080/basic-auth`, {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('user',username);
          sessionStorage.setItem('token',headerString)
        }
      )
    )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('user')
  }

  getToken(){
    return sessionStorage.getItem('token')
  }

  isLogged(){
    return sessionStorage.getItem('user') !==null
  }

  logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  }
}
