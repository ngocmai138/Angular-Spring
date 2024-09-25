import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class AuthenticationBean{
  constructor(public message:String) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService{

  constructor(private http:HttpClient) { }

  authenticateUser(username:any, password:any){
    let headerString = 'Basic '+window.btoa(username+':'+password)
    let headers = new HttpHeaders({
      Authorization:headerString
    })
    return this.http.post<AuthenticationBean>(`http://localhost:8080/basic-auth`,{},{headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem('username',username)
            sessionStorage.setItem('token',headerString)
          }
        )
      )
  }
  getUsername(){
    return sessionStorage.getItem('username')
  }
  getToken(){
    console.log('token '+sessionStorage.getItem('token'))
    return sessionStorage.getItem('token')
  }
  isLoggedIn(){
    return sessionStorage.getItem('username')!==null
  }
  logout(){
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
  }

}
