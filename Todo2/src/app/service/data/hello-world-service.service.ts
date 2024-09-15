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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-variable-path/${user}`);
  }
}
