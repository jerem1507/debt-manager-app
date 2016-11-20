// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
// MATERIAL DESIGN MODULES
import { MaterialModule } from '@angular/material';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';



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
    TopMenuComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
