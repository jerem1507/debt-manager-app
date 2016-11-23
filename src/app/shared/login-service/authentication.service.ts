import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router, CanActivate} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
  public token: string;

  constructor(private http: Http, private _router : Router) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  canActivate() {
    localStorage.getItem("user_token");
    return this.isLoggedIn();
  }

  public isLoggedIn() : boolean {
      // TODO Do the control of logged in
      return localStorage.getItem("user_token") != null;
  }

}
