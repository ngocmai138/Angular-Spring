import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {HardcoreAuthenticationService} from "./hardcore-authentication.service";
import {BasicAuthenticateService} from "./data/basic-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public basicAuthenticateService:BasicAuthenticateService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.basicAuthenticateService.isLogged();
  }
}
