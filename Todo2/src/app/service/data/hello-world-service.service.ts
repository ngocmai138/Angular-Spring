import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorldBean{
  constructor(message:String) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HelloWorldServiceService {

  constructor(public http:HttpClient) { }
  getHelloWorldResponse(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-bean");
  }
}
