import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, CanActivate} from "@angular/router";

@Component({
  selector: 'debt-manager-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

    constructor(private _route : ActivatedRoute, private _router : Router) { }

    ngOnInit() {
    }

}
