import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from './welcome/welcome.component'
import {TodosComponent} from "./todos/todos.component";
import {LogoutComponent} from "./logout/logout.component";
import {ErrorComponent} from "./error/error.component";
import {RouteGuardService} from "./service/route-guard.service";

export const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'welcome/:name',component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:TodosComponent, canActivate:[RouteGuardService]},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent}
];
