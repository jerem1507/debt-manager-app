import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from "@angular/router";
import {User} from "../beans/user";

@Injectable()
export class AuthService {

    public token: string;

    constructor(private _http: Http, private _router : Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    /**
     * Function to return request options
     *
     * @returns {RequestOptions}
     */
    private _options(headerList: Object = {}) {
        const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
        return new RequestOptions({ headers: headers });
    }

    public isLoggedIn() : boolean {
        // TODO Do the control of logged in
        return localStorage.getItem("user_token") == null;
    }

    public login(user : User) : void {
        localStorage.setItem("user_token", user.token);
        localStorage.setItem("user_email", user.email);
        this._router.navigate(['/home']);
    }

}
