import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorldBean{
  constructor(public message:String) {
  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    // return this.http.get<HelloWorldBean>("http://localhost:8080/hello-error");
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-bean");
  }
  executeHelloWorldBeanServiceWithPathParameter(name:any){
    return this.http.get(`http://localhost:8080/hello-variable-path/${name}`);
  }

}
