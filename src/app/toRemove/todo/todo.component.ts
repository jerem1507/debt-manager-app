import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit {

  private _todo : any = {};
  constructor() { }

  ngOnInit() {
  }

  get todo() {
    return this._todo;
  }

}
