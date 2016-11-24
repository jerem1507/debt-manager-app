import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login-service/authentication.service";

@Component({
  selector: 'debt-manager-top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

    constructor(private _authService : AuthService) {
    }

    ngOnInit() {

    }

    get isLoggedIn() : boolean {
        return this._authService.isLoggedIn();
    }

}
