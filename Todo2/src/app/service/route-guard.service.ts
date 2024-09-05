import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {HardcoreAuthenticationService} from "./hardcore-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public hardcoreAuthenticationService:HardcoreAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcoreAuthenticationService.isLoggedIn())
    return true;
    else return false;
  }
}
