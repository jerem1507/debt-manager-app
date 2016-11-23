import { Component, OnInit } from '@angular/core';
import {User} from "../shared/beans/user";

@Component({
  selector: 'debt-manager-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _user : User;
  private _errorMsg : string;

  constructor() {

  }

  ngOnInit() {
    this._user = new User();
  }

  set errorMsg(errorMsg : string){
    this._errorMsg = errorMsg;
  }

  get errorMsg() : string {
    return this._errorMsg;
  }

  get user() : User {
    return this._user;
  }

  public reset() : void  {
    console.log("Login Form : Reset requested")
    this._user.reset();
  }

  public login() : void {
    // We must login the user;
    console.log("Login Form : Login requested with user : " + this._user.toString());
  }

}
