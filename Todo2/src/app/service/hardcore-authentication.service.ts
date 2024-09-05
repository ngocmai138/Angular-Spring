import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HardcoreAuthenticationService {

  constructor(public router:Router) { }
  authenticate(username:String, password:String){
    if(username==='mai' && password === 'mai'){
      sessionStorage.setItem("authenticaterUser",username.toString());
      this.router.navigate(["welcome",username]);
      return false;
    }else {
      return true;
    }
  }
  isLoggedIn(){
    if(sessionStorage.getItem("authenticaterUser")===null){
      return false;
    }else {
      return true;
    }
  }
  logout(){
    sessionStorage.removeItem("authenticaterUser");
  }
}
