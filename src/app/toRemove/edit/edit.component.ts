import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodosService} from "../shared/todos-service/todos.service";

@Component({
  selector: 'todos-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private _hasTechnicalError : boolean = false;
  private _isSubmitted : boolean = false;
  private _todo : any = {};
  constructor(
    private _route: ActivatedRoute,
              private _router: Router, private todosService : TodosService) { }

  ngOnInit() {
    this._route.params
      .map((params: any) => params.id)
      .flatMap(id => this.todosService.fetchOne(id))
      .subscribe( todo => this._todo = todo);
  }

  get todo() {
    return this._todo;
  }

  get isSubmitted() {
    return this._isSubmitted;
  }

  get hasTechnicalError() {
    return this._hasTechnicalError;
  }

  edit(todo) {
    this.todosService.update(this._todo).subscribe(
      todo => this._todo = todo
    );
  }

  retry(todo) {
    this._router.navigate(['/edit', todo.id]);
  }

  goBack() {
    this._router.navigate(['/list']);
  }

}
