///<reference path="todo.ts"/>
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Todo} from './todo';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoDataService {
  lastId = 0;
  todos: Todo[] = [];

  constructor(
    private _http: Http
  ) { }

  addTodo(new_todo: Todo): TodoDataService {
    ++this.lastId;
    new_todo.id = this.lastId;
    new_todo.created_time = new Date();
    this.todos.push(new_todo);
    return this;
  }

  deleteById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
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
      .filter(todo => todo.id == id)
      .pop();
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  toggleTodoComplete(todo: Todo): Todo {
    return this.updateTodoById(todo.id, {
      complete: !todo.complete,
      complete_time: new Date()
    });
  }

  initialAllTodos(): Observable<any[]> {
    return this._http.get('apis/todo-list.json')
      .map(response => response.json());
  }

  getDetailById(id): Observable<any> {
    return this._http.get(`apis/todo-item${id}.json`)
      .map(res => res.json());
  }
}
