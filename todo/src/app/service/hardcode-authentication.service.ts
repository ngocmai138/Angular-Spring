import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username:String, password:String){
    console.log('before '+this.isLoggedIn());
    if(username === 'mai' && password === 'mai'){
      sessionStorage.setItem("authenticaterUser",  username.toString());
      console.log('after '+this.isLoggedIn());
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn(){
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem("authenticaterUser");
  }
}
