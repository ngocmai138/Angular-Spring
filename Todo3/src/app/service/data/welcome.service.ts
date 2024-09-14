import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloBean{
  constructor(public message:String) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http:HttpClient) { }
  getHelloMessageService(username:any){
    // let headerString = this.getHeader()
    // let headers = new HttpHeaders({
    //   Authorization:headerString
    // })
    return this.http.get<HelloBean>(`http://localhost:8080/hello-variable-path/${username}`)
  }

  getHeader(){
    let username = 'mai'
    let password = 'mai'
    let headerString = 'Basic '+window.btoa(username+':'+password)
    return headerString;
  }
}
