import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {HardcoreAuthenticationService} from "./hardcore-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public router:Router,
              public hardcoreAuthenticationService:HardcoreAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcoreAuthenticationService.isLogged()){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }
  }


}
