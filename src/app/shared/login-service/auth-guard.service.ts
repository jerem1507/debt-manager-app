import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {AuthService} from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {

    }

    canActivate() {
        if(this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}