import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

// APP COMPONENTS

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

export const AppRoutes = RouterModule.forRoot(ROUTES,{useHash: true});
