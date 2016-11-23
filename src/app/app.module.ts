// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

// MATERIAL DESIGN MODULES
import {MaterialModule} from '@angular/material';

import { AppRoutes } from './app.routes';

// Components UI
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { DebtComponent } from './debt/debt.component';
import { LoginComponent } from './login/login.component';

// Services
import {AuthService} from "./shared/login-service/authentication.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    AppRoutes,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    DebtComponent,
    LoginComponent
  ],
  providers: [
      AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
