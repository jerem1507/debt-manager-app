import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'debt-manager-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _router : Router, private _route : ActivatedRoute) { }

    ngOnInit() {

    }

    public logout() : void {
        console.log("Logout requested");
        localStorage.clear();
    }



}
