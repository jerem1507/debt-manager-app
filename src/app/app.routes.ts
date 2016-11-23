import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DebtComponent} from "./debt/debt.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./shared/login-service/authentication.service";

// APP COMPONENTS

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: DebtComponent, canActivate: [AuthService]},
  {path: 'login', component: LoginComponent}
];

export const AppRoutes = RouterModule.forRoot(ROUTES,{useHash: true});
