import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {TodosService} from "../shared/todos-service/todos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'todos-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnChanges {

  @Input() todo:any;

  private _hasTechnicalError : boolean = false;
  private _isSuccess : boolean = false;
  private _isSubmitted : boolean = false;
  private _statuses = [];

  constructor(private todosService : TodosService, private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(record) {
    if(record.todo && record.todo.currentValue) {
      this.todo = record.todo.currentValue;
    }
  }

  get hasTechnicalError() {
    return this._hasTechnicalError;
  }
  get isSuccess() {
    return this._isSuccess;
  }

  get isSubmitted() {
    return this._isSubmitted;
  }

  get statuses() {
    return this._statuses;
  }

  goBack() {
    this._router.navigate(['/list']);
  }

  fetchListOfStatuses() {
    this.todosService.fetchStatuses().subscribe(statuses => this._statuses = statuses);
  }

}
