import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {HardcoreAuthenticationService} from "./http/hardcore-authentication.service";
import {BasicAuthenticateService} from "./http/basic-authenticate.service";
import {JwtAuthenticateService} from "./http/jwt-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public jwtAuthenticateService:JwtAuthenticateService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.jwtAuthenticateService.isLogged();
  }
}
