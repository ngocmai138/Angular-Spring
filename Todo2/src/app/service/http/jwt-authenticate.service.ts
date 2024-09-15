import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {AuthenticateBean} from "./basic-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticateService {

  constructor(private http:HttpClient) { }
  authenticateUser(username:any, password:any){
    return this.http.post<any>(`http://localhost:8080/authenticate`, {username, password})
      .pipe(
      map(
        data => {
          sessionStorage.setItem('user',username);
          sessionStorage.setItem('token', `Bearer ${data.token}`)
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
