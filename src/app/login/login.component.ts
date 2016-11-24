import { Component, OnInit } from '@angular/core';
import {User} from "../shared/beans/user";
import {AuthService} from "../shared/login-service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'debt-manager-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private _user : User;
    private _errorMsg : string;

    constructor(private _authService : AuthService, private _router : Router) {
        this._user = new User();
    }

    ngOnInit() {
        // TODO : Redirect to Home if loggedIn
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
        this._authService.login(this._user);
    }

}
