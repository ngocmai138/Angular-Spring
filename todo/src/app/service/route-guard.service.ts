import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {HardcodeAuthenticationService} from "./http/hardcode-authentication.service";
import {BasicAuthenticationService} from "./http/basic-authentication.service";
import {JwtAuthenticationService} from "./http/jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public basicAuthenticationService:BasicAuthenticationService,
              public hardcodeAuthenticationService:HardcodeAuthenticationService,
              public jwtAuthenticationSeriveService:JwtAuthenticationService,
              public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.jwtAuthenticationSeriveService.isLoginIn())
    {
      return true;
    }else
    {
    this.router.navigate(['login'])
    return false;
    }
  }
}
