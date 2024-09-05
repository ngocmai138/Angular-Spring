import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {HardcodeAuthenticationService} from "./hardcode-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public hardcodeAuthenticationService:HardcodeAuthenticationService,
              public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodeAuthenticationService.isLoggedIn())
      return true;
    this.router.navigate(['login'])
    return false;
  }
}
