import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username:String, password:String){
    if(username === 'mai' && password === 'mai'){
      if (typeof sessionStorage !== 'undefined')
      sessionStorage.setItem("authenticaterUser",  username.toString());
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn(){
    let user;
    if (typeof sessionStorage !== 'undefined')
    user = sessionStorage.getItem("authenticaterUser");
    return !(user===null);
  }

  logout(){
    if (typeof sessionStorage !== 'undefined')
    sessionStorage.removeItem("authenticaterUser");
  }
}
