import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, CanActivate} from "@angular/router";

@Component({
  selector: 'debt-manager-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit, CanActivate {

  constructor(private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit() {
  }

  canActivate() {
    console.log("CanActivate");
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this._router.navigate(['/login']);
  }

}
