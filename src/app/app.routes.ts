import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DebtComponent} from "./debt/debt.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./shared/login-service/auth-guard.service";

// APP COMPONENTS

const ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'create', component: DebtComponent, canActivate: [AuthGuard]}
];

export const AppRoutes = RouterModule.forRoot(ROUTES,{useHash: true});
