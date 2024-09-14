import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloWorldBean{
  constructor(message:String) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HelloWorldServiceService {
  username?:any
  password?:any

  constructor(public http:HttpClient) { }
  getHelloWorldResponse(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-bean");
  }
  getHelloWorldResponseWithParam(user:any){
    let headersString = this.createHeader();
    let headers = new HttpHeaders({
      Authorization:headersString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-variable-path/${user}`, {headers});
  }

  createHeader(){
    this.username='mai'
    this.password='mai'
    let header = 'Basic '+window.btoa(this.username+':'+this.password)
    return header;
  }
}
