import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

const BASE_URL: string = 'http://127.0.0.1:4443';

@Injectable()
export class TodosService {

  constructor(private http: Http) {}

  /**
   * Function to return request options
   *
   * @returns {RequestOptions}
   */
  private _options(headerList: Object = {}) {
    const headers = new Headers(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return new RequestOptions({ headers: headers });
  }

  fetchTodos() {
    return this.http.get(`${BASE_URL}/api/todos`)
      .map( res => res.json() );
  }

  fetchOne(id) {
    return this.http.get(`${BASE_URL}/api/todos/${id}`)
      .map( res => res.json() );
  }

  create(todo) {
    return this.http.post(`${BASE_URL}/api/todos`, JSON.stringify(todo), this._options())
      .map( res => res.json() );
  }

  update(todo) {
    return this.http.put(`${BASE_URL}/api/todos/${todo.id}`, todo)
      .map( res => res.json() );
  }

  delete(id) {
    return this.http.delete(`${BASE_URL}/api/todos/${id}`)
      .map( res => res.json() );
  }

  fetchStatuses() {
    return this.http.get(`${BASE_URL}/api/status`)
      .map( res => res.json() );
  }
}
