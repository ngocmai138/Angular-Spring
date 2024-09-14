import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_URL} from "../../app.constants";

export class HelloWorldBean{
  constructor(public message:String) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanServiceWithPathParameter(name:any){
    return this.http.get(`${API_URL}hello-variable-path/${name}`);
  }
}
