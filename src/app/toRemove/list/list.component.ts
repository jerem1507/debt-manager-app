import { Component, OnInit } from '@angular/core';
import {TodosService} from "../shared/todos-service/todos.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'todos-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  private _todos = [];
  private _hasTechnicalError : boolean = false;
  private _hasTodo : boolean = false ;
  private _hasInProgress : boolean = false ;
  private _hasDone : boolean = false ;

  constructor(private todosService : TodosService, private _route : ActivatedRoute, private _router : Router) {
  }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(todos => this._todos = todos);
  }

  get todos() {
    return this._todos;
  }

  get hasTechnicalError() {
    return this._hasTechnicalError;
  }

  delete(id) {
    this.todosService.delete(id)
      .flatMap( _ => this.todosService.fetchTodos() )
      .subscribe( todos => {
        this._todos = todos
      });

    this._hasTodo = false;
    this._hasInProgress = false;
    this._hasDone = false;

    for (let todo of this._todos) {
      if (todo.status.identifier === "todo") {
        this._hasTodo = true;
      }
      if (todo.status.identifier === "in_progress") {
        this._hasInProgress = true;
      }
      if (todo.status.identifier === "done") {
        this._hasDone = true;
      }
    }
  }

  editTodo(id) {
    this._router.navigate(['/edit', id]);
  }

  createTodo() {
    this._router.navigate(['/create']);
  }

  get hasTodo() {
    for (let todo of this._todos) {
      if (todo.status.identifier === "todo") {
        this._hasTodo = true;
      }
    }
    return this._hasTodo;
  }

  get hasInProgress() {
    for (let todo of this._todos) {
      if (todo.status.identifier === "in_progress") {
        this._hasInProgress = true;
      }
    }
    return this._hasInProgress;
  }

  get hasDone() {
    for (let todo of this._todos) {
      if (todo.status.identifier === "done") {
        this._hasDone = true;
      }
    }
    return this._hasDone;
  }
}
