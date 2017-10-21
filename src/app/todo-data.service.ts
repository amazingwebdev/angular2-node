///<reference path="todo.ts"/>
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todo } from './todo';
import { environment } from '../environments/environment';

@Injectable()
export class TodoDataService {
  todos: Todo[] = [];
  comment_logs: any[] = [];

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
    private _http: Http
  ) { }

  addTodo(new_todo: Todo): Observable<any> {
    new_todo.created_time = new Date();

    return this._http.post(environment.static_url + '/todo', new_todo);
  }

  deleteById(id: number): Observable<any> {
    return this._http.delete(environment.static_url + `/todo/${id}`);
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addLog(title, log) {
    if (log) {
      this.comment_logs.push([
        title,
        log
      ]);
    }
  }

  getAllCommentLogs(): any[] {
    return this.comment_logs;
  }

  toggleTodoComplete(todo: Todo): Todo {
    return this.updateTodoById(todo.id, {
      complete: !todo.complete,
      complete_time: new Date()
    });
  }

  initialAllTodos(): Observable<any[]> {
    return this._http.get(environment.static_url + '/todo')
      .map(response => response.json());
  }

  getDetailById(id): Observable<any> {
    return this._http.get(environment.static_url + `/todo/${id}`)
      .map(res => res.json());
  }
}
