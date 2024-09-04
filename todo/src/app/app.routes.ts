  import { Routes } from '@angular/router';
  import {LoginComponent} from "./login/login.component";
  import {WelcomeComponent} from "./wellcome/welcome.component";
  import {ErrorComponent} from "./error/error.component";
  import {TodosComponent} from "./todos/todos.component";

export const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'welcome/:name', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'todos', component:TodosComponent},
  {path:'**', component:ErrorComponent}
];
